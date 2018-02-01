import React from 'react';

const Alert = ({type, custom, children}) =>

    <div className={type ? `alert mt-3 alert-${type} ${custom}` : `alert alert-info ${custom}`} role="alert">
     {children[0]} <br/> {children[1]}
    </div>

;

export default Alert;
