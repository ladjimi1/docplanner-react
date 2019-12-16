import React from 'react';
import './App.css';
const tab = [
    {title:'Marketing & PR',
    
    },
    {title:'Customer Succes & Sales',

    },
    {title:'IT,Product,Design & UX',

    },
    {title:'Finance & Administration',

    },
    {title:'HR & more',
    
    }
]
function Sounav(){
    return(
        <ul className='sou-nav'>
         {tab.map(el=><li>{el.title}</li>)}
        </ul>
       
    )
}
export default Sounav;