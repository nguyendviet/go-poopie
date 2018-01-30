import React from 'react';
import './Alert.css'

const Alert = props =>
    <div className={props.type ? `alert alert-${props.type}` : `alert alert-info`} role="alert">
        {props.children}
    </div>
;

export default Alert;