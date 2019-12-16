import React from 'react';
import rg from './rg.svg';
import './App.css';
import Sounav from './Sounav';
const tab = [
{title:'About',
lien:'#',
active:true
},
{title:'Career',
lien:'#',
active:false
},
{title:'Department',
lien:'#',
active: false
}
]
function Navbar(){
return(
    <div className="Navbar">
        <img className="logo" src={rg}/>
        <ul className="nav">
{tab.map(el=> (
    <li>
        <a className={el.active ? "active" : undefined} href={el.lien}>{el.title}</a>
        {el.title === 'Department' && <Sounav />}
    </li>
    ))}
</ul>
</div>

)


}

export default Navbar;