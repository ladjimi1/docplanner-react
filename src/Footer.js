import React from 'react';
const tab = [
    "We are leaders in 10 countries:,Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Colombia, Brazil, Argentina and Chile",

     "This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.",

    "www.docplanner.com © 2019"
]
const Footer =()=>{
    return(
        <div className="foot">
           {tab.map(el => <p className="foo">{el}</p>)} 
        </div>
        
   )
}
export default Footer;