//Functions-TS-Level-1_3
console.log("Functions-TS-Level-1_3");

function showPersonInfo(name: string, city: string, age: number): void {
	return console.log(
		`Hallo, mein Name ist ${name}. Ich bin ${Math.floor(
			age
		)} Jahre jung. Ich komme aus ${city}.`
	);
}

showPersonInfo("deborah", "bochum", 34);

console.log("_______________");

// Functions-TS-Level-1_5
console.log("Functions-TS-Level-1_5");

function multiplyAndDivide(a: number, b: number): void {
	const produkt = a * b;
	const div = a / b;

	console.log(`Multiplikation von ${a} und ${b}: ${produkt}`);
	if (b !== 0) {
		console.log(`Division von ${a} und ${b}: ${div}`);
	} else {
		console.log(`%cDivision durch 0 ist nicht erlaubt`, `color:red`);
	}
}

multiplyAndDivide(10, 2);
multiplyAndDivide(30, 20);
multiplyAndDivide(100, 100);
multiplyAndDivide(5, 0);
multiplyAndDivide(45, 173);
multiplyAndDivide(1, 1000);

console.log("______________________");
// Functions-TS-Grundlagen-Level-1_1
console.log("Functions-TS-Grundlagen-Level-1_1");

function intro1() {
	console.log("Hello Function");
}
intro1();

const intro2 = (): string => {
	console.log("Hallo Arrow Function");
	return "huppali";
};

const returnValue = intro2();

console.log(returnValue);

console.log("______________________");
// Functions-TS-Grundlagen-Level-1_4
console.log("Functions-TS-Grundlagen-Level-1_4");

function showHero(
	heroName: string,
	heroPower: string,
	heroEnemy: string
): void {
	const nameOutput = `Mein:e Lieblingsheld:in ist ${heroName}.`;
	const powerOutput = `Sie/Er hat die Fähigkeit einer/s ${heroPower}.`;
	const enemyOutput = `Sein/Ihre größte:r Gegner:in ist ${heroEnemy}.`;

	console.log(`${nameOutput}+ ${powerOutput} + ${enemyOutput}`);
}

showHero("Venom", "Gestaltwandler", "Drake");

console.log("______________________");
// Functions-TS-Grundlagen-Level-1_6
console.log("Functions-TS-Grundlagen-Level-1_6");

const returnOne = function (): number {
	return 1;
};

const x = 1;
const y = returnOne();

if (x == y) {
	console.log("Wird das gedruckt?");
} else {
}

console.log("__________________");
// Functions-TS-Grundlagen-Level-1_7
console.log("Functions-TS-Grundlagen-Level-1_7");

const multi = (a: number): number => {
	return a * a;
};

console.log(multi(4));

console.log("__________________");
// Functions-TS-Grundlagen-Level-1_8
console.log("Functions-TS-Grundlagen-Level-1_8");

const debosAge = function ageOfYears(birthYeahr: number): number {
	return 2024 - birthYeahr;
};

console.log(debosAge(1990));

const altersDifferenz = function otherAge(a: number, b: number): number {
	if (a > b) {
		return a - b;
	} else {
		return b - a;
	}
};

console.log(altersDifferenz(1990, 1992));

console.log("_____________________");
// Functions-TS-Grundlagen-Level-1_9
console.log("Functions-TS-Grundlagen-Level-1_9");

const personIDInfo = (
	vorname: string,
	name: string,
	birthTown: string,
	age: number,
	city: string
): void => {
	const infoOutput = console.log(
		`Mein Name ist ${vorname} ${name}. Ich bin in ${birthTown} geboren. Ich lerne bei SuperCode. Ich bin ${age} und ich wohne in ${city}.`
	);
	return infoOutput;
};

personIDInfo("Aurora", "Stardust", "New York", 20, "Celestia");
personIDInfo("Deborah", "Koch", "Lünen", 34, "Bochum");
