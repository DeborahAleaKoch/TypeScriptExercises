// Taschenrechner

const resultArea = document.querySelector<HTMLParagraphElement>("#result-area");

const number1 = document.querySelector<HTMLButtonElement>("#number-1");
const number2 = document.querySelector<HTMLButtonElement>("#number-2");
const number3 = document.querySelector<HTMLButtonElement>("#number-3");
const number4 = document.querySelector<HTMLButtonElement>("#number-4");
const number5 = document.querySelector<HTMLButtonElement>("#number-5");
const number6 = document.querySelector<HTMLButtonElement>("#number-6");
const number7 = document.querySelector<HTMLButtonElement>("#number-7");
const number8 = document.querySelector<HTMLButtonElement>("#number-8");
const number9 = document.querySelector<HTMLButtonElement>("#number-9");
const number0 = document.querySelector<HTMLButtonElement>("#number-0");

const operationKomma = document.querySelector<HTMLButtonElement>("#komma");
const operationAdd = document.querySelector<HTMLButtonElement>("#add");
const operationSubtra = document.querySelector<HTMLButtonElement>("#subtra");
const operationMultiplikation =
	document.querySelector<HTMLButtonElement>("#multi");
const operationDivision =
	document.querySelector<HTMLButtonElement>("#division");

const operationDel = document.querySelector<HTMLButtonElement>("#del");
const operationResult = document.querySelector<HTMLButtonElement>("#result");

function writeOperation(operation: string): void {
	if (resultArea !== null) {
		// operation ist ein Operator und keine Zahl
		if (isNaN(Number(operation))) {
			const lastValue = Number(resultArea.innerHTML.toString().slice(-1));
			if (isNaN(lastValue)) {
				return;
			}
		}
		resultArea.innerHTML += operation;
	}
}

// for (let i = 0; i <= 9; i++) {
// 	const numberElement = document.querySelector<HTMLButtonElement>(
// 		`#number-${i}`
// 	);
// 	if (numberElement !== null) {
// 		numberElement.onclick = () => {
// 			writeOperation(i.toString());
// 		};
// 	}
// }

if (number1 !== null) {
	number1.onclick = () => writeOperation("1");
}
if (number2 !== null) {
	number2.onclick = () => writeOperation("2");
}
if (number3 !== null) {
	number3.onclick = () => writeOperation("3");
}
if (number4 !== null) {
	number4.onclick = () => writeOperation("4");
}
if (number5 !== null) {
	number5.onclick = () => writeOperation("5");
}
if (number6 !== null) {
	number6.onclick = () => writeOperation("6");
}
if (number7 !== null) {
	number7.onclick = () => writeOperation("7");
}
if (number8 !== null) {
	number8.onclick = () => writeOperation("8");
}
if (number9 !== null) {
	number9.onclick = () => writeOperation("9");
}
if (number0 !== null) {
	number0.onclick = () => writeOperation("0");
}

if (operationDel !== null) {
	operationDel.onclick = () => {
		if (resultArea !== null) {
			resultArea.innerHTML = " ";
		}
	};
}

if (operationAdd !== null) {
	operationAdd.onclick = () => writeOperation("+");
}
if (operationKomma !== null) {
	operationKomma.onclick = () => writeOperation(".");
}
if (operationSubtra !== null) {
	operationSubtra.onclick = () => writeOperation("-");
}
if (operationMultiplikation !== null) {
	operationMultiplikation.onclick = () => writeOperation("*");
}
if (operationDivision !== null) {
	operationDivision.onclick = () => writeOperation("/");
}

function calculate(): void {
	if (resultArea !== null) {
		const lastValue = Number(resultArea.innerHTML.toString().slice(-1));
		if (isNaN(lastValue)) {
			return;
		}

		const result = eval(resultArea.innerHTML.toString());

		if (result !== undefined) {
			resultArea.innerHTML = result;
		}
	}
}
if (operationResult !== null) {
	operationResult.onclick = calculate;
}
