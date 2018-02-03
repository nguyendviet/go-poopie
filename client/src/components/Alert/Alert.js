import React from 'react';

const Alert = ({type, custom, children}) =>

    <div className={type ? `alert mt-3 alert-${type} ${custom}` : `alert alert-info ${custom}`} role="alert">
     {children}
    </div>

;

export default Alert;
