import React from "react";
import './styles/Nav.css'
import { navItems } from "./Items";
const Nav = () =>{

    let elements = navItems.map(item => <li className='p-l'> <a href={item.link}> {item.title} </a> </li>)
    return(
        <>
         <ul style={ {display: 'flex', listStyle: 'none'} }>
         {elements}
         </ul>
        </>
    )
}

export default Nav