let dataA = document.getElementsByTagName(`td`).item(0);
let dataB = document.getElementsByTagName(`td`).item(1);
let dataC = document.getElementsByTagName(`td`).item(2);
let dataD = document.getElementsByTagName(`td`).item(3);

window.onload = () => {
    dataA.addEventListener(`click`, () => {
        dataA.style.color = `blue`;
        dataA.className = `rotate-data`;
        if((dataB.className === `rotate-data`& dataB.style.color === `blue`)){
            dataB.style.color = `black`;
            dataB.className = `reverse-rotate`;
        }else if((dataC.className === `rotate-data`& dataC.style.color === `blue`)){
            dataC.style.color = `black`;
            dataC.className = `reverse-rotate`;
        }else if((dataD.className === `rotate-data`& dataD.style.color === `blue`)){
            dataD.style.color = `black`;
            dataD.className = `reverse-rotate`;
        }
    });
    dataB.addEventListener(`click`, () => {
        dataB.style.color = `blue`;
        dataB.className = `rotate-data`;
        if((dataA.className === `rotate-data` & dataA.style.color === `blue`)){
            dataA.style.color = `black`;
            dataA.className = `reverse-rotate`;
        }else if((dataC.className === `rotate-data`& dataC.style.color === `blue`)){
            dataC.style.color = `black`;
            dataC.className = `reverse-rotate`;
        }else if((dataD.className === `rotate-data`& dataD.style.color === `blue`)){
            dataD.style.color = `black`;
            dataD.className = `reverse-rotate`;
        }
    });

    dataC.addEventListener(`click`, () => {
        dataC.style.color = `blue`;
        dataC.className = `rotate-data`;
        if((dataA.className === `rotate-data`& dataA.style.color === `blue`)){
            dataA.style.color = `black`;
            dataA.className = `reverse-rotate`;
        }else if((dataB.className === `rotate-data`& dataB.style.color === `blue`)){
            dataB.style.color = `black`;
            dataB.className = `reverse-rotate`;
        }else if((dataD.className === `rotate-data`& dataD.style.color === `blue`)){
            dataD.style.color = `black`;
            dataD.className = `reverse-rotate`;
        }
    });

    dataD.addEventListener(`click`, () => {
        dataD.style.color = `blue`;
        dataD.className = `rotate-data`;
        if((dataA.className === `rotate-data` & dataA.style.color === `blue`)){
            dataA.style.color = `black`;
            dataA.className = `reverse-rotate`;
        }else if((dataB.className === `rotate-data` & dataB.style.color === `blue`)){
            dataB.style.color = `black`;
            dataB.className = `reverse-rotate`;
        }else if((dataC.className === `rotate-data` & dataC.style.color === `blue`)){
            dataC.style.color = `black`;
            dataC.className = `reverse-rotate`;
        }
    });
};
