console.log("Welcome :)");

// Intro-TS-Level-1_12
let dogName = "leon";
console.log(dogName);

dogName = "elf";

let value = 11;
console.log(value);

let seventeen = 17;
const sum = seventeen + 44;
console.log(sum);

// Aufgabe Intro-TS-Level- 1_13

// Addition
let addition_operator: number = 1 + 1;
console.log("addition: " + addition_operator);

// Subtraktion
let subtraktion_operator: number = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);

// Multiplikation
let multiplication_operator: number = 2 * 2;
console.log("multiplication: " + multiplication_operator);

// Division
let division_operator: number = 4 / 2;
console.log("division: " + division_operator);

// Modulo: zeigt an, was der Rest sein würde.
let modulo_operator: number = 14 % 5;
console.log("modulus: " + modulo_operator);

// Intro-Level_1_8
let x: number = 20;
let y: number = 30;

let add: number = x + y;
console.log(add);

let sub: number = x - y;
console.log(sub);
let sub1: number = y - x;
console.log(sub1);

let product: number = x * y;
console.log(product);

let div: number = x / y;
console.log(div);

let z: number = 10;

let resultOne: number = (x * y) / z;
console.log(resultOne);

let a: number = 15;
let b: number = 9;

let modulo: number = a % b;
console.log(modulo);

let c: number = 20;
let resultTwo: number = (a + b) * c;
console.log(resultTwo);

console.log(++a);
console.log(--b);

let resultThree: number = a - b;

let lastResult: number = resultOne % resultTwo;
console.log(lastResult);

// intro-Ts-Level-1_16 (Arithmetische Operationen)

let score: number = 5 + 5 * 10;
console.log("Ergebnis: " + score);

let score1 = (5 + 5) * 10;
console.log("Ergebnis: " + score1);

let score3 = 0;
score3 = score3 + 10;
console.log("Ergebnis: " + score3);

score3 += 10;
console.log("Ergebnis: " + score3);

let zahl = 1;
zahl = zahl + 1;
zahl += 1;

zahl++;
console.log("increment: " + zahl);

zahl--;
console.log("dekrement: " + zahl);
