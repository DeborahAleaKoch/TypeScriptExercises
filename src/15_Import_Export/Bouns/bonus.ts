// die zu erratenen wörter importieren
// buchstaben importieren
import { alphabet } from "./woerter";
// alphabet über eine loop funktion erstellen
const articleOutput = document.querySelector<HTMLDivElement>("#alphabet");

if (articleOutput) {
	alphabet.forEach((entry) => {
		const divContainer = document.createElement("button");

		articleOutput.appendChild(divContainer);
		const pElement = document.createElement("p");

		divContainer.appendChild(pElement);
	});
}
// die länge des wortes anzeigen im output

// die einzeinen buchstaben anzeigen

// funktion für die zeit
