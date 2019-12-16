import React, { Component } from 'react';
import Carte from './Carte';
import Gol from './Gol.png';



const tab = [
    {title: "The world's biggest healthcare platform",
     title1: "We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries."}
]
const Thew =()=>{
    return(
        
        <div className="jam">
            {tab.map(el =><div className ="jama"><p className="jamp">{el.title}</p><p className="jams">{el.title1}</p><img className="Gol" src={Gol}/></div>)}
            <Carte/>
            

        </div>
        
    )
}
export default Thew;