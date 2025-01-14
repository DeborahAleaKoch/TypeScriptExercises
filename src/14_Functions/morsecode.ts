const morseAlphabet = [
	{ letter: "1", morseCode: ".----" },
	{ letter: "2", morseCode: "..---" },
	{ letter: "3", morseCode: "...--" },
	{ letter: "4", morseCode: "....-" },
	{ letter: "5", morseCode: "....." },
	{ letter: "6", morseCode: "-...." },
	{ letter: "7", morseCode: "--..." },
	{ letter: "8", morseCode: "---.." },
	{ letter: "9", morseCode: "----." },
	{ letter: "0", morseCode: "-----" },
	{ letter: " ", morseCode: "    " },
	{ letter: "A", morseCode: ".-" },
	{ letter: "B", morseCode: "-..." },
	{ letter: "C", morseCode: "-.-." },
	{ letter: "D", morseCode: "-.." },
	{ letter: "E", morseCode: "." },
	{ letter: "F", morseCode: "..-." },
	{ letter: "G", morseCode: "--." },
	{ letter: "H", morseCode: "...." },
	{ letter: "I", morseCode: ".." },
	{ letter: "J", morseCode: ".---" },
	{ letter: "K", morseCode: "-.-" },
	{ letter: "L", morseCode: ".-.." },
	{ letter: "M", morseCode: "--" },
	{ letter: "N", morseCode: "-." },
	{ letter: "O", morseCode: "---" },
	{ letter: "P", morseCode: ".--." },
	{ letter: "Q", morseCode: "--.-" },
	{ letter: "R", morseCode: ".-." },
	{ letter: "S", morseCode: "..." },
	{ letter: "T", morseCode: "-" },
	{ letter: "U", morseCode: "..-" },
	{ letter: "V", morseCode: "...-" },
	{ letter: "W", morseCode: ".--" },
	{ letter: "X", morseCode: "-..-" },
	{ letter: "Y", morseCode: "-.--" },
	{ letter: "Z", morseCode: "--.." },
];

const z = morseAlphabet.find((entry) => entry.letter === "z")?.morseCode;

const inputElement = document.querySelector<HTMLInputElement>("#text-input");
const button = document.querySelector<HTMLButtonElement>("button");
const outputElement =
	document.querySelector<HTMLParagraphElement>("#text-output");

function encryptLetter(input: string): string {
	const encrypted = morseAlphabet.find((entry) => {
		return entry.letter === input.toUpperCase();
	});
	if (encrypted) {
		return encrypted.morseCode;
	}
	return input;
}

// console.log(encryptLetter("Hallo"));

function encryptText(text: string): string {
	let encrypted: string = "";
	for (let i = 0; i < text.length; i++) {
		encrypted += encryptLetter(text[i]);
	}

	return encrypted;
}

function encryptWithMap(text: string): string {
	const encrypted = [...text].map((character) => encryptLetter(character));

	return encrypted.join("");
}
const text = "Hallo Debo, Feierabend";

console.log({
	"with map": encryptWithMap(text),
	"with for": encryptText(text),
	equal: encryptText(text) === encryptWithMap(text),
});
