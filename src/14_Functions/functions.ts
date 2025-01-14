// Functions-TS-Grundlagen-Level-1_2
// Schreibe eine Function, die "Hallo" in deinem HTML anzeigt.
const outputHallo =
	document.querySelector<HTMLParagraphElement>("#output-hello");

function sayHallo() {
	if (outputHallo === null) {
		return console.log("hier ist was schief gegangen");
	} else {
		outputHallo.innerHTML = "Hallo";
	}
}
sayHallo();

// Schreibe eine 2. Function, die die Summe von zwei Zahlen in deinem Browser (Konsole oder HTML) anzeigt.

const sumNumbersOfTwo = document.querySelector<HTMLParagraphElement>("#sum");
function sumTwoNumbers(num1: number, num2: number): void {
	const sumNumbers = num1 + num2;
	if (sumNumbersOfTwo === null) {
		return;
	} else {
		sumNumbersOfTwo.textContent = `${sumNumbers}`;
	}
}
sumTwoNumbers(2, 10); // das Ergebnis ist -> 12

let sumOfTwoNumbers = (num1: number, num2: number) => {
	const sumNumbers = num1 + num2;
	if (sumNumbersOfTwo === null) {
		return;
	} else {
		sumNumbersOfTwo.textContent = `${sumNumbers}`;
	}
};

// Schreibe eine 3. Function, die das Ergebnis der Multiplikation von zwei Zahlen über window.alert ausgibt

function productOfTwo(num1: number, num2: number) {
	const product = num1 * num2;
	window.alert(`Das Ergebnis ist ${product}`);
}

const windowAlertFunction = (num1: number, num2: number) => {
	const product = num1 * num2;
	window.alert(`Das Ergebnis ist ${product}`);
};

// productOfTwo(2, 2);

// Schreibe eine 4. Function, die einen Parameter vom Typ Object hat und die alle Eigenschaften (Keys) des Objekts in der Konsole ausgibt.

type Object = {
	firstName: string;
	lastName: string;
	age: number;
};

function objectTypes(person: Object): void {
	console.log(Object.keys(person));
}
const personOneFunction = (person: Object) => console.log(Object.keys(person));

const person1 = {
	firstName: "deborah",
	lastName: "koch",
	age: 34,
};

objectTypes(person1);
personOneFunction(person1);


