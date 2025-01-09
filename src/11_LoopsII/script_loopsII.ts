// Loops-TS-Level-1_10

const numberArray: number[] = [2, 3, 67, 84, 5, 34, 1, 12, 99, 1678, 123, 24];
const numberArray2: number[] = [23, 67, 23, 567, 789, 0, 986, 21123, 45, 1];
const numberArray3: number[] = [-2, 34, 45, -1124, 33, 12, 6668];
const numberArray4: number[] = [];

// funktion wird geschrieben
function getHighestNumber(array: number[]): number {
	// hier wird überprüft ob das array überhaupt einen inhalt hat und wenn es leer ist wir ein fehler mit nachricht angezeigt
	if (array.length <= 0) {
		throw new Error("leeres Array");
	}
	// variable wird deklariert und der 'startwert' ist der erste Eintrag aus dem Array.
	let highestIntermediateNumber = array[0];
	// jeder eintrag aus dem Array wird durchlaufen und verglichen
	array.forEach((entry) => {
		if (entry > highestIntermediateNumber) {
			// die höchste number wird in die variable geschrieben
			highestIntermediateNumber = entry;
		}
	});
	// die Variable wird zurückgegeben
	return highestIntermediateNumber;
}

// console.log(getHighestNumber(numberArray));
// console.log(getHighestNumber(numberArray2));
// console.log(getHighestNumber(numberArray3));
// console.log(getHighestNumber(numberArray4));

// Loops-TS-Level-2_3
const stringOne: string = "heute schneit es draußen";
const stringTwo: string = "Es ist immer schoen was neues zu lernen!";

function getNumberOfVowels(array: string): number {
	// ein Array mit den zu vergleichenden Inhalt, in diesem Fall Vokale zu definieren.
	const vocalArray: string[] = [
		"a",
		"A",
		"i",
		"I",
		"e",
		"E",
		"o",
		"O",
		"u",
		"U",
	];

	// die Variable in der die einzelnen Vocale aufsummiert werden
	let countVocals = 0;

	for (let i = 0; i < array.length; i++) {
		if (vocalArray.includes(array[i])) {
			countVocals++;
		}
	}
	return countVocals;
}
// console.log(getNumberOfVowels(stringOne));
// console.log(getNumberOfVowels(stringTwo));

// Loops-TS-Level-2_4
function addToFifty(): void {
	let randomNumberSum = 0;

	while (randomNumberSum <= 50) {
		const getRandomNumber: number = Math.floor(Math.random() * 10) + 1;
		console.log(randomNumberSum);
		randomNumberSum += getRandomNumber;
	}
	console.log(`'${randomNumberSum} > 50. Stopping right here.'`);
}

// addToFifty();

// Loops-TS-Level-3_4

const inputUserNumber =
	document.querySelector<HTMLInputElement>("#input-number");
const selectOne = document.querySelector<HTMLInputElement>("#select-input-1");
const selectTwo = document.querySelector<HTMLInputElement>("#select-input-2");
const sumOutput = document.querySelector<HTMLParagraphElement>("#output");
const button = document.querySelector<HTMLButtonElement>("#button");

function getAddedModuloNumbers(): void {
	if (
		inputUserNumber === null ||
		selectOne === null ||
		selectTwo === null ||
		sumOutput === null
	) {
		return;
	}
	// hier kommen die weitern if abfragen hin.
	if (
		inputUserNumber.valueAsNumber === 0 ||
		Number(selectOne.value) === Number(selectTwo.value)
	) {
		window.alert(
			"Bitte geben Sie eine Zahl ein die groesser ist als 0! Zwei gleiche Zahlen sind nicht gewünscht!"
		);
	}
	let sumNumbers = 0;
	for (let i = 1; i < inputUserNumber.valueAsNumber; i++) {
		if (
			i % Number(selectOne.value) === 0 ||
			i % Number(selectTwo.value) === 0
		) {
			sumNumbers += i;
		}
	}

	sumOutput.innerHTML = `${sumNumbers}`;
	// return sumNumbers;
}

if (button) {
	button.onclick = getAddedModuloNumbers;
}

// Loops-TS-Level-3_5
