import React from 'react';

const Button = ({color, children, type, href}) => {
    
    return(
        <div>
           <button type={type} className={ `btn btn-${color}` }> { (type == 'link') ? 
             <a href={href} target='_blank'>{children}</a> :
              children }
            </button> 
        </div>
    )
}

export default Button