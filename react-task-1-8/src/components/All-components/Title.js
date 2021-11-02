import React from 'react'; 

const Title = ({children, size, color = '#000'}) =>{
    return(
        <div style ={ {fontSize: `${size}`, color: `${color}`, margin: '0 10px'} }>
            {children}
        </div>
    )
}

export default Title