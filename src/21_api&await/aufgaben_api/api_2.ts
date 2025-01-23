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

function renderCharacterEntry(entry: Character[]) {
	entry.forEach((element) => {
		if (outputSection) {
			outputSection.innerHTML += "";
			outputSection.innerHTML += `<div class='shadow-md'>
			<img src="${element.image}" alt="bild von character" />
			<div class="grid-cols-1 gap-3">
				<p class="">${element.name}</p>
				<p class="">${element.species}</p>
				<p class="">${element.status}</p>
				<p class="">${element.type}</p>
			</div>
		</div>`;
		}
	});
}
// fetch() in eine funktion geschrieben um diese mit anderen Eigenschaften wie Namen auf rufenzu können mit einem Button Click
function renderCharactersByName(name: string) {
	fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
		.then((respose) => {
			// console.log(respose);
			return respose.json();
		})
		.then((data: ResponseData) => {
			renderCharacterEntry(data.results);
			console.log(data.results);
		})
		.catch((error) => {
			console.warn(error);
		});
}
//leeres Argument -> es wird nur nach den einelnen Charaktären geguckt
renderCharactersByName("");

// bonus
// const buttonRick = document.querySelector<HTMLButtonElement>("#rick");
// const buttonMorty = document.querySelector("#morty");
// const buttonSummer = document.querySelector("#summer");
// const buttonBeth = document.querySelector("#beth");
// const buttonJerry = document.querySelector("#jerry");
