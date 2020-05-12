let dataA = document.getElementsByTagName(`td`).item(0);
let dataB = document.getElementsByTagName(`td`).item(1);
let dataC = document.getElementsByTagName(`td`).item(2);
let dataD = document.getElementsByTagName(`td`).item(3);

window.onload = () => {
    dataA.addEventListener(`click`, () => {
        dataA.className = `rotate-data`;
        if((dataB.className === `rotate-data`)){
            dataB.className = `reverse-rotate`;
        }else if((dataC.className === `rotate-data`)){
            dataC.className = `reverse-rotate`;
        }else if((dataD.className === `rotate-data`)){
            dataD.className = `reverse-rotate`;
        }
    });
    dataB.addEventListener(`click`, () => {
        dataB.className = `rotate-data`;
        if((dataA.className === `rotate-data`)){
            dataA.className = `reverse-rotate`;
        }else if((dataC.className === `rotate-data`)){
            dataC.className = `reverse-rotate`;
        }else if((dataD.className === `rotate-data`)){
            dataD.className = `reverse-rotate`;
        }
    });

    dataC.addEventListener(`click`, () => {
        dataC.className = `rotate-data`;
        if((dataA.className === `rotate-data`)){
            dataA.className = `reverse-rotate`;
        }else if((dataB.className === `rotate-data`)){
            dataB.className = `reverse-rotate`;
        }else if((dataD.className === `rotate-data`)){
            dataD.className = `reverse-rotate`;
        }
    });

    dataD.addEventListener(`click`, () => {
        dataD.className = `rotate-data`;
        if((dataA.className === `rotate-data`)){
            dataA.className = `reverse-rotate`;
        }else if((dataB.className === `rotate-data`)){
            dataB.className = `reverse-rotate`;
        }else if((dataC.className === `rotate-data`)){
            dataC.className = `reverse-rotate`;
        }
    });
};
