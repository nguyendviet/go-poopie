import React from 'react';
import './Alert.css'

const Alert = props =>
    <div className="alert alert-info mt-3" role="alert">
        {props.children}
    </div>
;

export default Alert;