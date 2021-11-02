import React from "react";
import logo from '../../img/Logo.png';

const Card = () => {
    return(
        <div className="card" style={ {width: '18rem', margin: '0 auto'} }>
            <img src={logo} className="card-img-top" alt="logo"/>
            <div className="card-body">
                <h5 className="card-title">React</h5>
                <p className="card-text">Задания для прокачки React</p>
                <a href="https://www.google.com/" className="btn btn-primary" target='_blank'>Google search</a>
            </div>
        </div>
    );
}

export default Card