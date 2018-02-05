import React, { Component } from "react";
import Alert from "../../components/Alert";
import API from '../../utils/API';

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

        API.login(this.state.email)
            .then(res => {
                this.setState({
                    alert: `Welcome back ${res.data.name}!`,
                    alertType: "success"
                });
                console.log(res.data)
            })
            .catch(err => {
                this.setState({
                    alert: `User Not Found!`,
                    alertType: "success"
                });

            })

        // this will show if server responses with status 200, and user's name. right now just leave it here
        this.setState({
            alert: `Logged in with email ${this.state.email}`,
            alertType: "success"
        });

        this.setState({
            email: "",
            password: ""
        });
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-lg-8">
                        <Alert type={this.state.alertType} custom="font-xlg text text-center mt-3 bold yellowAlert">
                            {this.state.alert}
                        </Alert>
                    </div>
                    <div className="col-sm-12 col-lg-8">
                        <form className="form">
                            <input
                                className="form-control-lg mb-2"
                                value={this.state.email}
                                name="email"
                                onChange={this.handleInputChange}
                                type="email"
                                placeholder="Email"
                            />
                            <input
                                className="form-control-lg mb-2"
                                value={this.state.password}
                                name="password"
                                onChange={this.handleInputChange}
                                type="password"
                                placeholder="Password"
                            />
                            <button
                                className="btn btn-primary btn-brown btn-block btn-lg mt-3"
                                onClick={this.handleFormSubmit}
                            >Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogIn;