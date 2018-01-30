import React, { Component } from "react";
import Alert from "../../components/Alert";

class LogIn extends Component {
    state = {
        email: "",
        password: "",
        alert: "Log in if you already have an account.",
        alertType: ""
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

        // this will show if server responses with status 200, and user's name. right now just leave it here
        this.setState({
            alert: `Logged in with email ${this.state.email}`,
            alertType: "success"
        });

        this.setState({
            firstName: "",
            lastName: ""
        });
    };

    render() {
        return (
            <div>
                <Alert type={this.state.alertType}>
                    {this.state.alert}
                </Alert>
                <div className = "formcontainer">
                    <form className="form">
                        <input 
                            className = "form-control"
                            value={this.state.email}
                            name="email"
                            onChange={this.handleInputChange}
                            type="email"
                            placeholder="Email"
                        />
                        <input 
                            className = "form-control"
                            value={this.state.password}
                            name="password"
                            onChange={this.handleInputChange}
                            type="password"
                            placeholder="Password"
                        />
                        <button 
                            className = "btn-primary" 
                            onClick={this.handleFormSubmit}
                        >Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LogIn;