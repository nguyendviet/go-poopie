const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bathroomSchema = new Schema({
    _id: {type: String, required: true},
    name: {type: String, required: false},
    location: {
        type: Object, 
        required: true, 
        location: {
            coordinates: {
                lat: {type: Number}, 
                lng: {type: Number}
            }
        }
    },
    date: {type: Date, default: Date.now}
}, {_id: false});

const Bathroom = mongoose.model('Bathroom', bathroomSchema);

module.exports = Bathroom;