import React from 'react';
import './App.css';
import img from './lg.png'
const Heider = () => {
    return(
        <div>
            <img className="lgo" src={img}/>
            {<h1 className="text">Making the healthcare experience more human</h1>}
        </div>
        
        
    )
}
export default Heider;