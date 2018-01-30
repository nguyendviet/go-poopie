import React, { Component } from "react";
import Alert from "../../components/Alert";
import "../SignUp/signup.css";

class SignUp extends Component {
    // Setting the component's initial state
    state = {
        name: "",
        email: "",
        password: "",
        alert: "Let us know who you are",
        alertType: ""
    };
  
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
    
        if (name === "password") {
            value = value.substring(0, 15);
        }
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };
  
    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        
        if (!this.state.name || !this.state.email || !this.state.password) {
            this.setState({
                alert: "All fields are required!",
                alertType: "danger"
            });
        } 
        else if (this.state.password.length < 6) {
            this.setState({
                alert: `Choose a more secure password ${this.state.name}!`,
                alertType: "warning"
            });
        } 
        else {
            this.setState({
                alert: `Hello  ${this.state.name}!`,
                alertType: "success"
            });
        }

        this.setState({
            name: "",
            email: "",
            password: ""
        });
    };
  
    render() {
        return (
            <div>
                <div className = "container-fluid">
                    <div className="row">
                        <Alert type={this.state.alertType} custom="display-4 text-center col-sm-12 mt-3 bold">
                            {this.state.alert}
                        </Alert>
                        <div className = "col-sm-12">
                            <form className="form">
                                <input className = "form-control-lg mb-2"
                                    value={this.state.name}
                                    name="name"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Name"
                                />
                                    <input className = "form-control-lg mb-2"
                                    value={this.state.email}
                                    name="email"
                                    onChange={this.handleInputChange}
                                    type="email"
                                    placeholder="Email"
                                />
                                <input className = "form-control-lg mb-2"
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.handleInputChange}
                                    type="password"
                                    placeholder="Password" 
                                />
                                <button 
                                    className = "btn btn-primary btn-block btn-lg mt-3"
                                    onClick={this.handleFormSubmit}
                                >SignUp
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;