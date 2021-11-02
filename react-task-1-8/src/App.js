import React from 'react';
import {Header, Footer, Contents} from './components';
import logo from './img/Logo.png';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header logo ={logo} logoName='React task' style={ {flex: '0 0 auto'} }/>
      <Contents style={ {flex: '1 0 auto'}} />
      <Footer style={ {flex: '0 0 auto'} } />
    </div>
  );
}

export default App;
