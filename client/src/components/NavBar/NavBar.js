import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import logo from '../../images/full-logo.png'


const navStyle = {
    backgroundColor: '#FFBF00',
    height: 70,
}
const navItemStyle = {
    alignSelf: 'center',
}
const navLinkStyle = {
    fontSize: 'x-large',
}
const logoStyle = {
    height: 56,
    width: 56,
    textAlign: 'center',
    justifyContent: 'center',
}

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
                <ul className="nav" style={navStyle}>
                    <li style={navItemStyle} className="nav-item">
                        <Link to="/" className="nav-link" style={navLinkStyle}><img src={logo} alt="logo" style={logoStyle} className='logo' /></Link>
                    </li>
                    <li style={navItemStyle} className="nav-item">
                        <Link to="/add" className="nav-link" style={navLinkStyle}>Add Bathroom</Link>
                    </li>
                </ul>
            )
            : (
                <ul className="nav" style={navStyle}>
                    <li style={navItemStyle} className="nav-item">
                        <Link to="/" className="nav-link" style={navLinkStyle}><img src={logo} alt="logo" style={logoStyle} className='logo' /></Link>
                    </li>
                    <li style={navItemStyle} className="nav-item">
                        <Link to="/signup" className="nav-link" style={navLinkStyle}>SignUp</Link>
                    </li>
                    <li style={navItemStyle} className="nav-item">
                        <Link to="/login" className="nav-link" style={navLinkStyle}>LogIn</Link>
                    </li>
                </ul>
            )
        )
    }
}

export default NavBar;