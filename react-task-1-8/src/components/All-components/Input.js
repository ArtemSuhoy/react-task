import React from "react";


const Input = ({type, placeholder, value, children}) =>{
    return(
        <>
         <input type={type} placeholder={placeholder} value={value} className='form-control'/>
        </>
    )
}

export default Input;