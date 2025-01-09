import { da } from "date-fns/locale";

// Array-TS-Sort-Level-1_2 (sort + reverse)
console.log("Array-TS-Sort-Level-1_2 (sort + reverse)");

const codingLanguages: string[] = [
	"JavaScript",
	"Python",
	"Java",
	"Ruby",
	"PHP",
	"C++",
	"CSS",
	"C#",
	"Go",
	"C",
	"TypeScript",
	"Swift",
];

function sortDescending(element: string[]) {
	return element.sort().reverse();
}
console.log(sortDescending(codingLanguages));

console.log("__________________");

// Array-TS-Sort-Level-2_1
console.log("Array-TS-Sort-Level-2_1");

const names: string[] = [
	"Sergio",
	"Hannah",
	"Regallager",
	"Reliefpfeiler",
	"Rentner",
];

function reverseName(name: string) {
	const reversedName = name.split("").reverse().join("");
	return reversedName;
}
names.map((name) => console.log(reverseName(name)));

const text: string[] = ["Ella mag alle Bohnen", "han nesaH has ennaH"];

text.map((name) => console.log(reverseName(name)));

console.log("__________________");
// Array-TS-Level-1_11 (includes)
console.log("Array-TS-Level-1_11 (includes)");

const string: string =
	"Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";

const isItTrue: boolean = string.includes("Piper");
console.log(isItTrue); //true
const isItTrue1: boolean = string.includes("piper");
console.log(isItTrue1); //false
const isItTrue4: boolean = string.toLowerCase().includes("piper");
console.log(isItTrue4); //true

const isItTrue2: boolean = string.includes("peck");
console.log(isItTrue2); //true
const isItTrue3: boolean = string.includes("peck", 33);
console.log(isItTrue3); //false

console.log("__________________");
// Array-TS-Level-3_1 (find, split, trim)
console.log("Array-TS-Level-3_1 (find, split, trim)");

const artworks: string[] = [
	"Die Sternennacht - Vincent van Gogh",
	"Guernica - Pablo Picasso",
	"Die Geburt der Venus - Sandro Botticelli",
	"Die Nachtwache - Rembrandt",
	"Die Mona Lisa - Leonardo da Vinci",
	"Die Kartoffelesser - Vincent van Gogh",
	"Der Schrei - Edvard Munch",
	"Das letzte Abendmahl - Leonardo da Vinci",
	"Die freudige Botschaft - James Tissot",
	"Der Garten der Lüste - Hieronymus Bosch",
];

const artworkDates: string[] = [
	"Die Sternennacht - 1889",
	"Guernica - 1937",
	"Die Geburt der Venus - 1486",
	"Die Nachtwache - 1642",
	"Die Mona Lisa - 1503",
	"Die Kartoffelesser - 1885",
	"Der Schrei - 1893",
	"Das letzte Abendmahl - 1495",
	"Die freudige Botschaft - 1885",
	"Der Garten der Lüste - 1505",
];

function findSameWord(artworkName: string): void {
	const artWork = artworks.find((artworkElement) =>
		artworkElement.includes(artworkName)
	);
	const dateString = artworkDates.find((dateElement) =>
		dateElement.includes(artworkName)
	);

	if (artWork && dateString) {
		const artist = artWork.split("-")[1].trim();
		const date = dateString.split("-")[1].trim();

		console.log(`'${artworkName}' wurde von ${artist} im Jahre ${date} gemalt`);
	} else {
		console.log(`Artwork ${artworkName} not found`);
	}
}

findSameWord("Die Mona Lisa");

console.log("__________________");
// Array-TS-Iteration-Level-1_2 (map)
console.log("Array-TS-Iteration-Level-1_2 (map)");

const drinks = [
	"Coca-Cola",
	"Apfelsaft",
	"Pepsi",
	"Traubensaft",
	"Sprite",
	"Orangensaft",
	"Red Bull Energy Drink",
	"Fanta",
];

const upperDrinks = drinks.map((drink) => drink.toLocaleUpperCase());
console.log(upperDrinks);

const iLikeDrinks = drinks.map(function (drink) {
	console.log(`I like to drink ${drink}`);
	return drink;
});

console.log("__________________");
// Array-TS-Iteration-Level-1_4 (map)
console.log("Array-TS-Iteration-Level-1_4 (map)");

const fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

function temperature(element: number) {
	return console.log(((element - 32) / 1.8).toFixed(2));
}

fahrenheit.map(temperature);

console.log("__________________");
// Array-TS-Iteration-Level-1_5 (map)
console.log("Array-TS-Iteration-Level-1_5 (map)");

const checkNumber: number[] = [
	18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
	74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

function checkTrue(number: number) {
	if (number % 3 === 0) {
		return number + 100;
	} else {
		return number;
	}
}

const neuerBums = checkNumber.map(checkTrue);
console.log(neuerBums);

console.log("__________________");
// Array-TS-Iteration-Level-1_6 (map oder forEach)
console.log("Array-TS-Iteration-Level-1_6 (map oder forEach)");

const album: string[] = [
	"holidays.jpg",
	"Restaurant.jpg",
	"desktop",
	"rooms.GIF",
	"DOGATBEACH.jpg",
];

const lowerCaseAlbum = album.map((entry) => entry.toLowerCase());
console.log(lowerCaseAlbum);

function sliceEnd(name: string) {
	if (name.includes(".jpg") || name.includes(".gif")) {
		return name.slice(0, -4);
	} else {
		return "invalid";
	}
}

const fileName = lowerCaseAlbum.map(sliceEnd);
console.log(fileName);

console.log("__________________");
// Array-TS-Iteration-Level-1_8 (filter)
console.log("Array-TS-Iteration-Level-1_8 (filter)");

const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printEvenNumbers(number: number): boolean {
	if (number % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

function printOddNumbers(number: number): boolean {
	if (number % 2 !== 0) {
		return true;
	} else {
		return false;
	}
}

function printEvenNumbersButLessCode(number: number): boolean {
	return number % 2 === 0;
}

const even = zahlen.filter(printEvenNumbers);
const odd = zahlen.filter(printOddNumbers);

console.log({ even, odd });

const alsoEven = zahlen.filter((zahl: number) => {
	return zahl % 2 === 0;
});
console.log(alsoEven);
