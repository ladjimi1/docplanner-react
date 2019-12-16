import React from 'react';
import Pat from './Pat.png'
const tab = [
    {title:'For doctors', 
    title2:'Save time managing visits and cut no-shows by half',
}
 
]
const Patie = () =>{
    return(
        <div>
        {tab.map(el =><p className="tota"><p className="pat">{el.title}<p className="pt">{el.title2}</p></p><img className="img-pat" src ={Pat}/></p>)}
        
        </div>
        
    )
}
export default Patie;