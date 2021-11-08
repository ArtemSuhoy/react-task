import React from 'react'
import './Card.css'

const Card = ({index}) => {

    return (
        <div className="card" style={ {width: '18rem'} }>
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{ `Card ${index}` }</h5>
                <p className="card-text"> {`Text ${index}`} </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card