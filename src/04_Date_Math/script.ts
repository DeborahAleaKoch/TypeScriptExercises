// Date-TS-Level-1_1
console.log("Date-TS-Level-1_1");
const date1 = new Date();
console.log(date1);

const date2 = new Date(0);
console.log(date2);

const date3 = new Date(31556908800);
console.log(date3);

const date4 = new Date(86400000);
console.log(date4);

const firstOutput = document.querySelector<HTMLParagraphElement>("#first-date");

if (firstOutput) {
	firstOutput.innerHTML = `${date1}`;
}

const secondOutput =
	document.querySelector<HTMLParagraphElement>("#second-date");

if (secondOutput) {
	secondOutput.innerHTML = `${date2}`;
}

const thirdOutput = document.querySelector<HTMLParagraphElement>("#third-date");

if (thirdOutput) {
	thirdOutput.innerHTML = `${date3}`;
}

const fourthOutput =
	document.querySelector<HTMLParagraphElement>("#fourth-date");

if (fourthOutput) {
	fourthOutput.innerHTML = `${date4}`;
}
console.log("____________________");
console.log("Date-TS-Level-2_1");
// Date-TS-Level-2_1

const nowDate = new Date();
const year = nowDate.getFullYear();
const month = nowDate.getMonth() + 1;
const day = nowDate.getDate();

// const hour = nowDate.getHours();
// const minutes = nowDate.getMinutes();
// const seconds = nowDate.getSeconds();

const dateElement1 = document.querySelector<HTMLParagraphElement>("#date-1");
const dateElement2 = document.querySelector<HTMLParagraphElement>("#date-2");

if (dateElement1) {
	dateElement1.innerHTML = `${day}-${month}-${year}`;
}
if (dateElement2) {
	dateElement2.innerHTML = `${day}/${month}/${year}`;
}

const time1 = nowDate.toLocaleTimeString("de-DE");
console.log(time1);

const timeElement1 = document.querySelector<HTMLParagraphElement>("#time-1");
if (timeElement1) {
	timeElement1.innerHTML = `${time1}`;
}

const time2 = nowDate.toLocaleTimeString("de-DE", { timeZone: "UTC" });
const timeElement2 = document.querySelector<HTMLParagraphElement>("#time-2");
if (timeElement2) {
	timeElement2.innerHTML = `${time2}`;
}

console.log("____________________");

// Date-TS-Level-3_2
console.log("Date-TS-Level-3_2");

console.log("____________________");
// Math-TS-Level-1_1

console.log(Math.PI);

const PI = Number(Math.PI.toFixed(2));
console.log(PI);

console.log("____________________");
console.log("Math-TS-Level-1_2");
// Math-TS-Level-1_2

const randomNumbers: number[] = [3.14, 193.4464, 0.8596433607, -2.940629089];

// let a = Math.round(3.14)
// console.log(a);

function toRound(number: number) {
	let randomNR = Math.round(number);
	console.log(randomNR);
}

// Math.round(randomNumbers[0])
// toRound(randomNumbers[0])
// toRound(randomNumbers[1])

randomNumbers.map((currentNumber) => toRound(currentNumber));

console.log("____________________");
console.log("Math-TS-Level-1_3");
// Math-TS-Level-1_3

const randomNum: number = Math.random();
console.log(randomNum);

const randomNum1_10: number = Math.floor(Math.random() * 10);
console.log(randomNum1_10);

const randomNum1_100: number = Math.floor(Math.random() * 100);
console.log(randomNum1_100);

console.log("____________________");
// Math-TS-Level-2_2

const randomNumberGame: number = Math.floor(Math.random() * 10);

// const numb: number = Number(
// 	window.prompt("Schreibe eine Zahl zwischen 1 und 10!")
// );

// if (randomNumberGame === numb) {
// 	console.log("hurra. Es ist richtig");
// } else {
// 	console.log("MEEP MOOP - FAAAAAAAAALSCH");
// }

console.log("____________________");
console.log("Conditionals-TS-Level-1_5 (switch)");
// Conditionals-TS-Level-1_5 (switch)

const weekdayAsNumber: number = Number();
// window.prompt("Please insert a number from 1 to 7")

let weekdayAsString: string;

switch (weekdayAsNumber) {
	case 1:
		weekdayAsString = "montag";
		break;
	case 2:
		weekdayAsString = "dienstag";
		break;
	case 3:
		weekdayAsString = "mittwoch";
		break;
	case 4:
		weekdayAsString = "donnerstag";
		break;
	case 5:
		weekdayAsString = "freitag";
		break;
	case 6:
		weekdayAsString = "samstag";
		break;
	case 7:
		weekdayAsString = "sonntag";
		break;
	default:
		weekdayAsString = "Weekday must be between 1 and 7";
}

console.log(weekdayAsString);

console.log("____________________");
console.log("Conditionals-TS-Level-2_4 (if/else, switch)");
// Conditionals-TS-Level-2_4 (if/else, switch)

console.log("Conditionals-TS-Level-2_4 (if/else, switch)");

const randomNumber1: number = Number(Math.floor(Math.random() * 78));
const randomNumber2: number = Number(Math.floor(Math.random() * 78));

function comparison() {
	if (randomNumber1 === randomNumber2) {
		console.log("was ein zufall");
	} else if (randomNumber1 > randomNumber2) {
		console.log("erste zahl ist größer");
	} else if (randomNumber2 > randomNumber1) {
		console.log("zweite zahl ist größer");
	}
}

comparison();

switch (true) {
	case randomNumber1 === randomNumber2:
		console.log("was ein zufall");
		break;
	case randomNumber1 > randomNumber2:
		console.log("erste zahl ist größer");
		break;
	default:
		console.log("zweite zahl ist größer");
		break;
}

console.log("____________________");

console.log("Conditionals-TS-Level-2_8 (switch)");
// Conditionals-TS-Level-2_8 (switch)

const schoolGrade: number = Number(Math.floor(Math.random() * 10));

switch (schoolGrade) {
	case 1:
		console.log("sehr gut");
		break;
	case 2:
		console.log("gut");
		break;
	case 3:
		console.log("befriedigend");
		break;
	case 4:
		console.log("ausreichend");
		break;
	case 5:
		console.log("mangelhaft");
		break;
	case 6:
		console.log("ungenügend");
		break;
	case 7:
		console.log("Das ist keine gültige Schulnote.");
		break;
	case 8:
		console.log("Das ist keine gültige Schulnote.");
		break;
	case 9:
		console.log("Das ist keine gültige Schulnote.");
		break;
	case 10:
		console.log("Das ist keine gültige Schulnote.");
		break;
}

console.log("____________________");
console.log("Conditionals-TS-Level-3_1 (switch)");
// Conditionals-TS-Level-3_1 (switch)

const salesMonth: number = Number(Math.floor(Math.random() * 12));

let salesMonthDate: string | undefined;
switch (salesMonth) {
	case 1:
		salesMonthDate = "1. Quartal";
		break;
	case 2:
		salesMonthDate = "1. Quartal";
		break;
	case 3:
		salesMonthDate = "1. Quartal";
		break;
	case 4:
		salesMonthDate = "2. Quartal";
		break;
	case 5:
		salesMonthDate = "2. Quartal";
		break;
	case 6:
		salesMonthDate = "2. Quartal";
		break;
	case 7:
		salesMonthDate = "3. Quartal";
		break;
	case 8:
		salesMonthDate = "3. Quartal";
		break;
	case 9:
		salesMonthDate = "3. Quartal";
		break;
	case 10:
		salesMonthDate = "4. Quartal";
		break;
	case 11:
		salesMonthDate = "4. Quartal";
		break;
	case 12:
		salesMonthDate = "4. Quartal";
		break;
	default:
		console.log("hier ist was schief gelaufen. :/");
}

const totalSales: number = Number(Math.floor(Math.random() * 9000) + 1000);
// console.log(totalSales);

let salesOutput: string | undefined;
switch (true) {
	case totalSales >= 1000 && totalSales <= 2500:
		salesOutput = "schlecht";
		break;
	case totalSales >= 2501 && totalSales <= 5000:
		salesOutput = "mittelmäßig";
		break;
	case totalSales >= 5001 && totalSales <= 7500:
		salesOutput = "hoch";
		break;
	case totalSales >= 7501 && totalSales <= 10000:
		salesOutput = "unglaublich";
		break;
	default:
		salesOutput = "hier ist etwas schief gegangen!";
}

// console.log("Im" + quartal + "war der Umsatz" + howWasIt);
if (salesMonthDate && salesOutput) {
	console.log(`Im ${salesMonthDate} war der Umsatz ${salesOutput}! `);
}
