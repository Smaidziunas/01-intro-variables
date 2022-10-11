
const gylisEl = document.getElementById('gylis');
const plotisEl = document.getElementById('plotis');
const aukstisEl = document.getElementById('aukstis');


let sienosRes = document.getElementById('sienuPlotas');
let grindysRes = document.getElementById('grinduPlotas');
let perimetras = document.getElementById('perimetras');


let button = document.getElementById('calculate');

  function calculate() {

let resultSienos = aukstisEl.valueAsNumber * gylisEl.valueAsNumber;

console.log(resultSienos);

sienosRes.valueAsNumber = resultSienos;
    


let resultGrindys = gylisEl.valueAsNumber * plotisEl.valueAsNumber;

console.log(resultGrindys);

grindysRes.valueAsNumber = resultGrindys;


let resultperimetras = sienosRes.valueAsNumber * 4 + grindysRes.valueAsNumber * 2;

perimetras.valueAsNumber = resultperimetras;

console.log(resultperimetras);


// apskaiciuotaEl.valueAsNumber = result;

// console.log(apskaiciuotaEl.valueAsNumber);


}

button.onclick = calculate;
