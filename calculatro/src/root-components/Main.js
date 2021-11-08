import React, {useState} from 'react';
import './Main.css';

const Main = () => {
    const [value, setValue] = useState(null)
    const numbers = [1,2,3,4,5,6,7,8,9,0];
    const actions = ['+','-','/','*'];
    const inputData = [];

    const elements = [...actions, ...numbers];
    const button = elements.map(item => {
        return(
        <div style={ {padding: '5px'} } >
            <button name={item} onClick={ () => setValue(value + item) } >{item}</button>
        </div>
        )
    })
    

    return(
        <div className='main'>
            <input className='input' placeholder='Calculate display' value={
                value
             } />

            <button name='=' onClick={ () => setValue(eval(value)) } >=</button>
            <div className='elements'>{button}</div>
        </div>
    )

}

export default Main