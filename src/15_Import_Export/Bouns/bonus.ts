// die zu erratenen wörter importieren
import { words } from "./woerter";

// buchstaben importieren
import { alphabet } from "./woerter";
// alphabet über eine loop funktion erstellen
const articleOutput = document.querySelector<HTMLDivElement>("#alphabet");

if (articleOutput) {
	alphabet.forEach((entry) => {
		const divContainer = document.createElement("button");

		articleOutput.appendChild(divContainer);
		const pElement = document.createElement("p");
		pElement.textContent = entry;
		divContainer.appendChild(pElement);
	});
}
// die länge des wortes anzeigen im output
const wordOutput = document.querySelector<HTMLDivElement>("#word-output");
if (wordOutput) {
	words.forEach((entry) => {
		const wordLength = entry.length;
		console.log(wordLength);
		const newPElement = document.createElement("p");
		wordOutput.appendChild(newPElement);
	});
}
// die einzeinen buchstaben anzeigen

// funktion für die zeit
