import React from 'react';
import Patie from './Patie';
import Doc from './Doc.png'




const tab = [
    {title:'For patients', 
    title2:'Find a doctor, book a visit and solve any health-related doubt',
}
 
]
const Docter = () =>{
    return(
        <div className="for">
        {tab.map(el =><p className="tot"><p className="pat">{el.title}<p className="pt">{el.title2}</p></p><img className="img-doc" src={Doc}/></p>)}
        <Patie/>
        
        </div>
        
    )
}
export default Docter;
