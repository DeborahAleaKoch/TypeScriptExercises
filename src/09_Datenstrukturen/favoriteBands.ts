const mapFavoriteBands = new Map<string, string[]>([
	["Kiss", ["Gene Simmons", "Paul Stanley", "Ace Frehley", "Peter Criss"]],
	["Kraftwerk", ["Ralf Hütter", "Florian Schneider", "Karl Bartos"]],
	["Queen", ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"]],
]);

console.log(mapFavoriteBands.size);

mapFavoriteBands.set("Alien Sex Fiend", [
	"Nik Fiend",
	"Mrs. Fiend",
	"Rat Fink Jnr.",
	"Doctor Milton",
]);
// console.log(mapFavoriteBands);
// console.log(mapFavoriteBands.size);

// console.log(mapFavoriteBands.get("Kraftwerk"));
const kraftwerkMembers = mapFavoriteBands.get("Kraftwerk");
if (kraftwerkMembers) {
	console.log(kraftwerkMembers[2]);
}

//& Map-TS-Level-2_1

// "Metallica", ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"]

// console.log(mapFavoriteBands.get("Metallica")); // -> undefined, da die Band nicht enthalten ist

mapFavoriteBands.set("Queen", ["Pi Pa Po", "Herr Ärmel", "Lukas", "Jim Knopf"]);

// console.log(mapFavoriteBands); //Der Eintrag wird überschrieben und die neuen Band Mitglieder stehen jetzt an der Stelle der ursprünglichen Besatzung.

// & Map-TS-Level-3_1

mapFavoriteBands.forEach((values, key) => {
	const filteredValues = values.filter((element) => element.length >= 12);
	filteredValues.forEach((member) => {
		console.log(`Band: ${key}, Member: ${member}, Length: ${member.length}`);
	});
});
