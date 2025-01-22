import { movies } from "./movies";

type Movie = {
	title: string;
	year: string;
	regisseur: string;
	duration: string;
	genre: string[];
	score: string;
};

// erstellt mir ein Array aus Objecten zu den filmen.
function makeMovieObjects(
	movies: [string, string, string, string, string[], string][]
): Movie[] {
	return movies.map((movie) => {
		return {
			title: movie[0],
			year: movie[1],
			regisseur: movie[2],
			duration: movie[3],
			genre: movie[4],
			score: movie[5],
		};
	});
}
// console.log(makeMovieObjects(movies));

const movieObjects = makeMovieObjects(movies);
// console.log(movieObjects[3].title);

const inputSearch = document.querySelector<HTMLInputElement>("#input");
const searchButton = document.querySelector<HTMLButtonElement>("#suchen");
const yearUpButton = document.querySelector<HTMLButtonElement>("#year-up");
const yeardownButton = document.querySelector<HTMLButtonElement>("#year-down");
const rateButton = document.querySelector<HTMLButtonElement>("#rate");

const movieOutputAera = document.querySelector<HTMLDivElement>("#film-cards");

//hier sollen die einzelnen FilmKarten ausgegeben werden.

function renderMovies(movies: Movie[]) {
	if (movieOutputAera) {
		movieOutputAera.innerHTML = "";
	}
	movies.forEach((movie) => {
		//neues div-element
		const newDivElement = document.createElement("div");
		newDivElement.style.backgroundColor = "#fef08a";
		newDivElement.style.padding = "1rem";
		newDivElement.style.margin = "5px";
		newDivElement.style.width = "";
		// Füllen des divs mit den keys
		newDivElement.innerHTML = `
                        <h1>Title:${movie.title}</h1>
                        <p>Year:${movie.year}</p>
                        <p>Regisseur:${movie.regisseur}</p>
                        <p>Duration:${movie.duration}</p>
                        <p>Genre:${movie.genre}</p>
                        <p>Score:${movie.score}</p>`;
		//
		if (movieOutputAera) movieOutputAera.appendChild(newDivElement);
	});
}

renderMovies(movieObjects);

if (searchButton && inputSearch) {
	searchButton.addEventListener("click", () => {
		const inputValue = inputSearch.value;

		const filteredMovies = movieObjects.filter((element) => {
			// const fullText = JSON.stringify(element);
			// JSON.stringify() ist eine Funktion, die Objekte zu strings macht
			return (
				element.title.toLowerCase().includes(inputValue.toLowerCase()) ||
				element.genre.join().toLowerCase().includes(inputValue.toLowerCase()) || //join(), verbindet Arrays zu einem string
				element.regisseur.toLowerCase().includes(inputValue.toLowerCase()) ||
				element.duration.toLowerCase().includes(inputValue.toLowerCase()) ||
				element.score.toLowerCase().includes(inputValue.toLowerCase()) ||
				element.year.toLowerCase().includes(inputValue.toLowerCase())
			);
		});
		console.log(filteredMovies);

		renderMovies(filteredMovies);
	});
}

if (yearUpButton) {
	yearUpButton.addEventListener("click", (movie) => {
		movieObjects.sort();
	});
}
