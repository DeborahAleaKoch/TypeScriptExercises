// & Tuple-TS-Level-1_1

type StarWarsActor = [string, string][];

const starWarsActors: StarWarsActor = [
	["Luke Skywalker", "Mark Hamill"],
	["Darth Vader", "James Earl Jones"],
	["Yoda", "Frank Oz"],
	["Han Solo", "Harrison Ford"],
	["Princess Leia", "Carrie Fisher"],
];

starWarsActors.forEach((element) => {
	console.log(`${element[1]} spielt ${element[0]}.`);
});

// & Tuple-TS-Level-2_1
// andere Datei : employee.ts

// & Set-TS-Level-1_1

const starWarsCharacters = new Set<string>([
	"Luke Skywalker",
	"Darth Vader",
	"Obi Wan Kenobi",
]);

console.log(starWarsCharacters);
console.log(starWarsCharacters.add("Leia Organa"));
console.log(starWarsCharacters.add("Leia Organa"));
//Es wird nur ein Eintrag mit dem selben Inhalt gespeichert. es werden keine dopplungen auftreten.

// & Set-TS-Level-2_1

const marvelStars: string[] = [
	"Iron Man",
	"Captain America",
	"Thor",
	"Hulk",
	"Black Widow",
	"Spider Man",
];

marvelStars.push("Iron Man", "Thor"); // Es wird doppelt im Arrayaufgenommen
// console.log(marvelStars);

const marvelCharakters = new Set<string>(marvelStars); // die doppelten Einträge sind verschwunden.
console.log(marvelCharakters);

// & Map-TS-Level-1_1
// anderes file

// & Loops-TS-Level-1_4
const friendNames: string[] = [
	"Gerog",
	"Anass",
	"Elaine",
	"Hakan",
	"Eric",
	"Kim",
	"Sergio",
];

friendNames.forEach((element) => {
	console.log(element);
});

for (const friend of friendNames) {
	console.log(friend);
}
