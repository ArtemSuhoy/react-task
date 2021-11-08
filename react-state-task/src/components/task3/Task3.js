import React from 'react'
import { useState } from "react";
import {Luigi, McQueen, King, Boost} from './img'

let style={
    height: '300px',
    display: 'none',
}

let i = 0
const slides = [
    {
        img: Luigi,
        text: 'Luigi',
        id: `${i+=1}`
    }, 

    {
        img: McQueen,
        text: 'McQueen',
        id: `${i+=1}`
    },

    {
        img: King,
        text: 'McQueen',
        id: `${i+=1}`
    },

    {
        img: Boost,
        text: 'Boost',
        id: `${i+=1}`
    }
];

const Task3 = () => {
    let [slide, setSlider] = useState(1)
        
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div>
                <button onClick={ () => (slide <= 1) ? setSlider(slide = slides.length) : setSlider(slide - 1) }> - </button>
            </div>
            <div> 
                {slides.map( item =>{

                    (item.id == slide)? style = {display: 'block', height: '300px'} : style = {display: 'none', height: '300px'};
                    return( <img id={item.id} style={style} src={item.img} alt={item.text}  /> )
                } )}
            </div>
            <div>
                <button onClick={ () => (slide > slides.length-1) ? setSlider(slide = 1) : setSlider(slide + 1)}> + </button>
            </div>
        </div>
         )

        }
        
export default Task3 