import React from 'react';
const tab = [
    {
        img: "https://www.docplanner.com/images/warsaw.png",
        srcset: "https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x",
        titre: "Warsan",
    },
    {
        img: "https://www.docplanner.com/images/barcelona.png",
        srcset:"https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x",
        titre: "Barcalon",
    },
    {
        img: "https://www.docplanner.com/images/barcelona.png",
        srcset :"https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x",
        titre: "Istanbul",
    },
    {
        img :"https://www.docplanner.com/images/barcelona.png",
        srcset:"https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x",
        titre: "Rome",
    },
    {
        img:"https://www.docplanner.com/images/barcelona.png",
        srcset:"https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x",
        titre: "Mexico city",
    },
    {
        img:"https://www.docplanner.com/images/curitiba.png",
        srcset:"https://www.docplanner.com/images/curitiba.png 1x, https://www.docplanner.com/images/curitiba@2x.png 2x",
        titre: "Curtiba",
    },
]
const Payes = () => {
    return (
        <div className="pays">
            {tab.map(el => <div className="pams">
                <p className="pay">
                    <img scr={el.img} srcset={el.srcset}/>
                </p>
                <div className="barc">
                    <p className="pas">{el.titre}</p>
                    <button className="btn">SEE OPPENING</button>
                </div>
            </div>)}

        </div>

    )
}
export default Payes;