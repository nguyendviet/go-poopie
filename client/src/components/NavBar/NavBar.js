import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

class NavBar extends Component {
    state = {
        loggedIn: false
    }

    componentWillMount() {
        if (window.location.href.includes('add')) {
            this.setState({
                loggedIn: true
            })
        }
    }

    render() {
        return (
            this.state.loggedIn
            ? (
                <ul className="nav">
                    <li><img alt="logo"></img></li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/add" className="nav-link">Add Bathroom</Link>
                    </li>
                </ul>
            )
            : (
                <ul className="nav">
                    <li><img alt="logo"></img></li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link">SignUp</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">LogIn</Link>
                    </li>
                </ul>
            )
        )
    }
}

export default NavBar;