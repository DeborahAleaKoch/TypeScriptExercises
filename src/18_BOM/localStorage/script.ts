//was in den localStorage hinein schreiben
localStorage.setItem("Katze", "Pepe");

//
const cat = localStorage.getItem("Katze");
console.log(cat);

localStorage.removeItem("Katze");

const lottozahlen = { zahlen: [35, 24, 1, 29, 28, 2], zusatzZahl: 5 };

const stringifiedLottozahlen = JSON.stringify(lottozahlen.zahlen);
const stringifiedZusatzZahl = JSON.stringify(lottozahlen.zusatzZahl);

localStorage.setItem("lottozahlen", stringifiedLottozahlen);
localStorage.setItem("ZusatzZahl", stringifiedZusatzZahl);


