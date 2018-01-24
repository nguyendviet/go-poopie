import React, { Component } from "react";

class LogIn extends Component {
    state = {
        firstName: "",
        lastName: ""
      };
    
      handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
    
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        console.log(`Hello ${this.state.firstName} ${this.state.lastName}`);
        this.setState({
          firstName: "",
          lastName: ""
        });
      };
    
      render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
           <div className = "formcontainer">
            <p>
            Enter Your Name and Password to Login {this.state.firstName} {this.state.lastName}
            </p>
            <form className="form">
              <input className = "form-control"
                value={this.state.firstName}
                name="firstName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="First Name"
              />
               <input className = "form-control"
                value={this.state.lastName}
                name="lastName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Last Name"
              />

              <input className = "form-control"
                value={this.state.passWord}
                name="passWord"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Password"
              />
              <button className = "btn-primary" onClick={this.handleFormSubmit}>Login</button>
            </form>
          </div>
        );
      }
    }
    

export default LogIn;

