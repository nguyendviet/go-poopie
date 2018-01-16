import React from 'react';
import {Link} from 'react-router-dom';
import './BigButton.css'

const BigButton = () =>
    <Link to="/map"><button type="button" className="btn btn-danger btn-lg btn-round">Big Button</button></Link>
;

export default BigButton;