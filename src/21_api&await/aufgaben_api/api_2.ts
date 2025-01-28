//fetch-level-3_1

//erstellen von interface/type
interface Character {
	id: number;
	name: string;
	species: string;
	image: string;
	status: string;
	type: string;
}

//Type definiert welcher als Ergebnis heraus kommt.
type ResponseData = {
	info: {
		count: number;
		next: string | null;
		pages: number;
		prev: string | null;
	};
	results: Character[];
};

const outputSection = document.querySelector("#output");
// /?name=beth  <- ans ende der URL um nach bestimmten Namen/Personen zu suchen
//  mit fetch die Daten von Server holen
// fetch("https://rickandmortyapi.com/api/character?name=morty")
// 	.then((respose) => {
// 		// console.log(respose);
// 		return respose.json();
// 	})
// 	.then((data: ResponseData) => {
// 		renderCharacterEntry(data.results);
// 		console.log(data.results);
// 	})
// 	.catch((error) => {
// 		console.warn(error);
// 	});
//Erstellen des einzelnen Charackters im html
function renderCharacterEntry(entry: Character[]) {
	if (outputSection) {
		// vorheriges Ergebnis aufräumen
		outputSection.innerHTML = "";
		entry.forEach((element) => {
			outputSection.innerHTML += `<div class='shadow-md  '>
			<img src="${element.image}" alt="bild von character" class='' />
			<div class="grid-cols-1 gap-3">
				<p class="">Name: ${element.name}</p>
				<p class="">Species: ${element.species}</p>
				<p class="">Status: ${element.status}</p>
				<p class="">Type: ${element.type}</p>
			</div>
		</div>`;
		});
	}
}
// fetch() in eine funktion geschrieben um diese mit anderen Eigenschaften wie Namen auf rufenzu können mit einem Button Click
function renderCharactersByName(name: string, searchterm: string = "name") {
	fetch(`https://rickandmortyapi.com/api/character?${searchterm}=${name}`)
		.then((respose) => {
			// console.log(respose);
			return respose.json();
		})
		.then((data: ResponseData) => {
			renderCharacterEntry(data.results);
			// console.log(data.results);
			//hier müsste für die nächsten20 einträge weiter gefetcht werden.
		})
		.catch((error) => {
			console.warn(error);
		});
}
//leeres Argument -> es wird nur nach den einelnen Charaktären geguckt
renderCharactersByName("");

// bonus - für die Main Character eigene Buttons
const buttonRick = document.querySelector<HTMLButtonElement>("#rick");
const buttonMorty = document.querySelector("#morty");
const buttonSummer = document.querySelector("#summer");
const buttonBeth = document.querySelector("#beth");
const buttonJerry = document.querySelector("#jerry");

if (buttonRick) {
	buttonRick.addEventListener("click", () => renderCharactersByName("rick"));
}
if (buttonMorty) {
	buttonMorty.addEventListener("click", () => renderCharactersByName("morty"));
}
if (buttonSummer) {
	buttonSummer.addEventListener("click", () =>
		renderCharactersByName("summer")
	);
}
if (buttonBeth) {
	buttonBeth.addEventListener("click", () => renderCharactersByName("beth"));
}
if (buttonJerry) {
	buttonJerry.addEventListener("click", () => renderCharactersByName("jerry"));
}

//Erstellen input und Button Logik um nach bestimmten Eigenschaften zu suchen
const inputField = document.querySelector<HTMLInputElement>("#input");
const inputButton = document.querySelector<HTMLButtonElement>("#search");
const selectField = document.querySelector<HTMLSelectElement>(
	"#choose-characteristics"
);

if (inputField && inputButton && selectField) {
	inputButton.addEventListener("click", () => {
		const inputValue = inputField.value;
		const selectValue = selectField.value;

		renderCharactersByName(inputValue, selectValue);
	});
}

const resetButton = document.querySelector<HTMLButtonElement>("#reset");
if (resetButton) {
	resetButton.addEventListener("click", () => {
		renderCharactersByName("");
	});
}
