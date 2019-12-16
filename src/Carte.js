import React from 'react';
const tab = [
    {
        title: <img scr="https://www.docplanner.com/img/flag.png" srcset="https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x"></img>,
        title1: "Leader in 10 countries",
        title2: "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",
    },
    {
        title: <img scr="https://www.docplanner.com/img/visits.png" srcset="https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x"></img>,
        title1: "1.5 million appointments",
        title2: "booked last month"
    },
    {
        title: <img scr="https://www.docplanner.com/img/patients.png" srcset="https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x"></img>,
        title1: "30 million unique patients",
        title2: "visit us every month"
    },
    {
        title: <img scr="https://www.docplanner.com/img/doctors.png" srcset="https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x"></img>,
        title1: "2 million active doctors",
        title2: "trust in our solutions",
    },


]
const Carte = () => {
    return (
        <div className="cart">
            {tab.map(el => <div className="crt">
                <p className="ico">{el.title}</p>
                <p className="icor">{el.title1}</p>
                <p className="icon">{el.title2}</p>
            </div>
            )}

        </div>

    )
}
export default Carte;