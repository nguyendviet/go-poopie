import React, { Component } from "react";
import Alert from "../../components/Alert";
import '../../styles/globalStyles.css';
import "../SignUp/signup.css";
import API from '../../utils/API';

class SignUp extends Component {
    // Setting the component's initial state
    state = {
        name: "",
        email: "",
        password: "",
        alert: "Who are you?",
        alert2: "(If you wanna go, we've got to know)",
        alertType: ""
    }
  
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
        event.preventDefault();
    
    //prevent default
       // this.context.router.history.push('/map')
        //Preventing the default behavior of the form submit (which is to refresh the page)
        
        if (!this.state.name || !this.state.email || !this.state.password) {
            this.setState({
                alert: "All fields are required!",
                alert2: "",
                alertType: "danger"
            });
        } 
        else if (this.state.password.length < 6) {
            this.setState({
                alert: `Choose a more secure password ${this.state.name}!`,
                alert2: "",
                alertType: "warning"
            });
        } 
        else {
            let user = {
                "name": this.state.name,
                "email": this.state.email,
                "password": this.state.password
            }
            
            API.saveUser(user)
            .then(res => {

                this.setState({
                    alert: `Thanks for Pooping, We Welcome You! ${res.data.name}`,
                    alert2: "",
                    alertType: "success"
                });

                setTimeout(() => {window.location = '/add'; }, 1000 * 2);
            })
            .catch(err => {
                this.setState({
                    alert: `User Already Exists`,
                    alertType: "danger"
                });
            });
            
            this.setState({
                name: "",
                email: "",
                password: ""
            });
        }
    };
  
    render() {
        return (
            <div>
                <div className = "container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-lg-8">
                            <Alert type={this.state.alertType} custom="font-xlg text-center mt-3 bold yellowAlert bold text">
                                <p>{this.state.alert}</p>
                                <p>{this.state.alert2}</p>
                            </Alert>
                        </div>
                        <div className = "col-sm-12 col-lg-8">
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
                                    className = "btn btn-brown btn-block btn-lg mt-3"
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