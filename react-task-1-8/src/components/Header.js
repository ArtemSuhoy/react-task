import React from 'react';
import { Nav } from '.';
import './styles/Header.css';
import { Title } from './All-components';
const Header = ({logo, logoName}) =>{
    return(
        <div className='d-flex jc-spaceBetween'>
            <div className='d-flex'>
              <img className='logo' src={logo} alt='Logotype' />
              <Title size='25px' color='#990'>Zagolovok</Title>
          </div>
          <Nav/>
        </div>
    )
}

export default Header;