// ? Loops-TS-Level-1_1

//  mit while
// let i = 1;
// while (i <= 10) {
// 	console.log(`Hello World ${i}`);
// 	i++;
// }

// mit for
for (let i = 1; i < 11; i++) {
	// if (i % 1 === 0) {
	// console.log(`Hello World ${i}`);
	// }
}

// ? Loops-TS-Level-1_2
// anlegen eines leeren arrays, worin werte gespeichert werden sollen
let numbersToTen: number[] = [];
// die schleife addiert die zahlen um eins auf und schiebt diese in das array.
for (let i = 0; i <= 10; i++) {
	numbersToTen.push(i);
	// console.log(i); // zwischen Werte, Ausgabe was im einzelnen hochgezählt wird.
}
// console.log(numbersToTen); // ausgabe des oben angelegten arrays

// ? Loops-TS-Level-1_3
// while Schleife

//  mit while
// let i = 0;
// while (i < 10) {
// 	console.log(`Hello World ${i}`);
// 	i++;
// }

// ?Loops-TS-Level-1_7
// do.. while mit innerHTML in der DOM

let num: number = 1;
const outputHtml =
	document.querySelector<HTMLParagraphElement>("#do-while-output");

// do {
// 	if (outputHtml !== null) {
// 		outputHtml.innerHTML += `<p>The number is ${num}</p>`;
// 		num++;
// 	}
// } while (num <= 5);

// ? Loops-TS-Level-1_8

// let numToTwenty: number = 1;
const outputHtmlToTwenty =
	document.querySelector<HTMLParagraphElement>("#do-while-to-20");

do {
	if (outputHtmlToTwenty !== null) {
		// hier kommen nur die ungeraden zahlen raus
		// outputHtmlToTwenty.innerHTML += `<p>${num}</p>`;
		num++;
		if (num % 2 === 0) {
			outputHtmlToTwenty.innerHTML += `<p>${num}</p>`;
			num++;
		}
	}
} while (num <= 20);

// ? Loops-TS-Level-2_1
function createImageNames() {
	const returnArray: string[] = [];
	for (let i = 1; i <= 100; i++) {
		const newNumber = i.toString().padStart(3, "0");
		const imageFileName = `image_${newNumber}.jpg`;
		returnArray.push(imageFileName);

		// const newNumber = returnArray.push(i).toString().padStart(3, "0");
		// console.log(`image_${newNumber.padStart(3, "0")}.jpg`);
	}
	console.log(returnArray);
}

// createImageNames();

// ?Loops-TS-Level-2_2
const inputNumber = Number(
	document.querySelector<HTMLInputElement>("#input-number")
);
const inputButton = document.querySelector<HTMLInputElement>("#submit-button");

const outputOfLooopO =
	document.querySelector<HTMLParagraphElement>("#loop-number");

function getLoopOs() {
	let loopOs: string = "";
	for (let i = 1; i < inputNumber; i++) {
		loopOs += "o";
		if (outputOfLooopO !== null) {
			outputOfLooopO.innerHTML = `<p>L${loopOs}p</p>`;
		}
		console.log(loopOs);
	}
}

if (inputButton !== null) {
	inputButton.onclick = () => getLoopOs();
}
