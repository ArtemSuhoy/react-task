import React from 'react';

const Alert = ({children, color}) => {

    return(
        <div className={`alert alert-${color}`} role="alert">
            {children}
        </div>
    )
}

export default Alert