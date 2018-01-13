import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

const NavBar = () =>
    <ul className="nav">
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
;

export default NavBar;
