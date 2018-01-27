var AccountController = function(userModel, session, mailer){
  this.crypto = require ('crypto');
  this.uuid = require ('node-uuid');
  this.ApiResponse = require ('../models/api-response.js');
  this.ApiMessages = require('../models/api-messages.js');
  this.UserProfileModel = require('../models/user-profile.js');
  this.userModel = session;
  this.mailer = mailer;
};

//this method gets a reference to the Controller's session variable
AccountController.prototype.getSession = function(){
  return this.session;
}

//this method sets a reference to the Controller's session variable
AccountController.protoype.setSession = function(){
  return this.session;
}

AccountController.prototype.hashPassword = function (password, salt, callback){
  var iterations = 10000,
      keyLen = 64;
  this.crypto.pbkdf2(password, salt, iterations, keyLen, callback);
}

AccountController.prototype.logon = function(email, password, callback){
  var me = this;

  me.userModel.findOne({email: email}, function(err, user){
    if(err){
      return callback(err, new me.ApiResponse({success: false, extras: {msg: me.ApiMessages.DB_ERROR} }));
    }

    if(user){
      me.hashPassword(password, user.passwordSalt, function(err, passwordHash){
        if (passwordHash === user.passwordHash){
          var UserProfileModel = new me.UserProfileModel({
            email: user.email,
            firstName: user.firstName,
          lastName: user.lastName
        });

        me.session.UserProfileModel = UserProfileModel;

        return callback(err, new me.ApiResponse({
          success: true, extras: {UserProfileModel: UserProfileModel}
        }));
      } else{
        return callback(err, new me.ApiResponse({success: false, extras: {msg: me.ApiMessages.INVALID_PWD} }));
      }
      });
    } else{
      return callback(err, new me.ApiResponse({success: false, extras: {msg: me.ApiMessages.EMAIL_NOT_FOUND}}));
    }
  });
};

AccountController.prototype.logoff = function() {
  if(this.session.userProfileModel) delete this.session.userProfileModel;
  return;
};

AccountController.prototype.register = function(newUser, callback){
  var me = this;

  user.userModel.findOne({email: newUser.email}, function(err, user){
    if(err){
      return callback(err, new me.ApiResponse({success: false, extras: {msg: me.ApiMessages.DB_ERROR} }));
    }
    if(user){
      return callback(err, new me.ApiResponse({success: false, extras: {msg: me.ApiMessages.EMAIL_ALREADY_EXISTS}}));
    } else{
      newUser.save(function(err, user, numberAffected){
        if(err){
          return callback(err, new me.ApiResponse({success: false, extras: {msg: me.ApiMessages.DB_ERROR} }));
        }

        if(numberAffected === 1){
          var userProfileModel = new me.userProfileModel({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
          });

          return callback(err, new me.ApiResponse({
            success: true, extras: {
              userProfileModel: userProfileModel
            }
          }));
        } else {
          return callback(err, new me.ApiResponse({success: false, extras: {msg: me.ApiResponse.COULD_NOT_CREATE_USER}}));
        }
      });
    }
  });
};

AccountController.prototype.resetPassword = function(email, callback){
  var me = this;

  me.userModel.findOne({email: email}, function(err, user){
    if(err){
      return callback(err, new me.ApiResponse({success: false, extras: {msg: me.ApiResponse.DB_ERROR}}))
    }

    var passwordResetHash = me.uuid.v4();
    me.session.passwordResetHash = passwordResetHash;
    me.session.emailWhoRequestedPasswordReset = email;

    me.mailer.sendPasswordResetHash(email, passwordResetHash);

    return callback(err, new me.ApiResponse({success: true, extras: {passwordResetHash: passwordResetHash}}))
  })
};

AccountController.prototype.resetPasswordFinal = function(email, newPassword, passwordResetHash, callback){
  var me = this;

  if(!me.session || !me.session.passwordResetHash){
    return callback(null, new me.ApiResponse({success: false, extras: {msg: me.ApiResponse.PASSWORD_RESET_EXPIRED}}));
  }
  if(me.session.passwordResetHash !== passwordResetHash){
    return callback();
  }
  if(me.session.emailWhoRequestedPasswordReset !== email){
    return callback();
  }

  var passwordSalt = this.uuid.v();
  me.hashPassword(newPassword, passwordSalt, function(err, passwordHash){
    me.userModel.update({email: email}, {passwordHash: passwordHash, passwordSalt: passwordSalt},
    function(err, numberAffected, raw){
      if(err){
        return callback(err, new me.ApiResponse({success: false, extras: {msg: me.ApiResponse.DB_ERROR}}));
      }
      if(numberAffected < 1){
        return callback(err, new me.ApiResponse({success: false, extras: {msg: me.ApiResponse.COULD_NOT_RESET_PASSWORD}}));
      } else{
        return callback(err, new me.ApiResponse({success: true, extras: null}));
      }
    });
  });
};

module.exports = AccountController;
