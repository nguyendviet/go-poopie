import React from 'react';
import {Link} from 'react-router-dom';
import './BigButton.css'

const BigButton = () =>
    <div className="lightgray-outer">
        <div className="gray-outer">
            <div className="outer-red">
                <div className="red-prime">
                    <Link to="/map">
                    <button type="button" className="btn  btn-lg btn-round">Go!</button></Link>
                </div>
            </div>
        </div>
    </div>

export default BigButton;