import React from "react";

const Footer = () => {
    let date = new Date().toLocaleString();
    return(
        <footer> 
            <p>@Copyright, все права защищены: {date}</p>
        </footer>
    )
}

export default Footer;