let dataA = document.getElementsByTagName(`td`).item(0);
let dataB = document.getElementsByTagName(`td`).item(1);
let dataC = document.getElementsByTagName(`td`).item(2);
let dataD = document.getElementsByTagName(`td`).item(3);
let allData = document.querySelectorAll(`table`);

dataA.addEventListener(`click`, () => {
    document.getElementsByTagName(`td`).item(0).className = `rotate-data`;
    console.log(dataA.compareDocumentPosition(allData));
    if(dataA.compareDocumentPosition(allData)& dataA.DOCUMENT_POSITION_CONTAINED_BY){
        document.getElementsByTagName(`td`).item(0).className = `reverse-rotate`;
    }
});
dataB.addEventListener(`click`, () => {
    document.getElementsByTagName(`td`).item(1).className = `rotate-data`;
    if(dataB.compareDocumentPosition(allData)& dataB.DOCUMENT_POSITION_CONTAINED_BY){
        document.getElementsByTagName(`td`).item(1).className = `reverse-rotate`;
    }

});

dataC.addEventListener(`click`, () => {
    document.getElementsByTagName(`td`).item(2).className = `rotate-data`;
    if(dataC.compareDocumentPosition(allData)& dataC.DOCUMENT_POSITION_CONTAINED_BY){
        document.getElementsByTagName(`td`).item(2).className = `reverse-rotate`;
    }
});

dataD.addEventListener(`click`, () => {
    document.getElementsByTagName(`td`).item(3).className = `rotate-data`;
    if(dataC.compareDocumentPosition(allData)& dataC.DOCUMENT_POSITION_CONTAINED_BY){
        document.getElementsByTagName(`td`).item(3).className = `reverse-rotate`;
    }

});
