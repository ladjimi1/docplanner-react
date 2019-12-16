import React from 'react';
const tab = [{
    tittle :"Improve the lives of millions. Change yours forever",
    tittle1 :"More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops."

}

]
const Improve = () => {
    return(
        <div>
           {tab.map(el => <p className="imp">{el.tittle}</p>)} 
           {tab.map(el => <p className="impr">{el.tittle1}</p>)} 
        </div>
        
    )
}
export default Improve;