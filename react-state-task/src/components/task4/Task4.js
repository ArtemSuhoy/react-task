import React, {useState} from 'react'

const Task4 = () => {
    const [status, setStatus] = useState(false);

    const redStyle =  { margin: '0 10px',height: '50px', width: '50px', backgroundColor: '#900', visibility: `${ (status) ? 'hidden' : 'visible'} `}
    const blueStyle = { margin: '0 10px',height: '50px', width: '50px', backgroundColor: '#009', visibility: `${ (status) ? 'visible' : 'hidden'} `}

    return (
        <div style={ {display: 'flex'} }> 
            <div onClick={ () => (status)? setStatus(false) : setStatus(true) } style={ redStyle }></div>
            <div onClick={ () => (status)? setStatus(false) : setStatus(true) } style={ blueStyle }></div>
        </div>
    )
}

export default Task4
