// Math-TS-Level-1_4
console.log("Math-TS-Level-1_4");

const numberArray: number[] = [
	399, 10, 186, 45, 9, 171, 491, 128, 24, 288, 56, 444, 217, 111, 187, 89, 270,
	485, 481, 179, 290, 14, 292, 250, 463, 189, 434, 184, 124, 443, 119, 23, 453,
	305, 68, 477, 58, 90, 347, 147, 64, 259, 131, 153, 29, 116,
];

const minNumber: number = Math.min(...numberArray);
console.log(minNumber);

const maxNumber: number = Math.max(...numberArray);
console.log(maxNumber);

// BESSER ALS BONUS in neuem file
// Math-TS-Level-2_4
// console.log('Math-TS-Level-2_4');

// Objekte-TS-Level-1_3
console.log("Objekte-TS-Level-1_3");

type Apple = {
	color: string;
	size: string;
	isSweet: boolean;
};

const redApple: Apple = { color: "red", size: "big", isSweet: true };
const greenApple: Apple = { color: "green", size: "small", isSweet: false };
const yellowApple: Apple = { color: "yellow", size: "big", isSweet: false };
const pinkApple: Apple = { color: "pink", size: "medium", isSweet: true };
const apples: Apple[] = [redApple, greenApple, yellowApple];

apples.forEach((element) => {
	console.log(element.size);
});

apples.forEach((element) => {
	console.log(element.color);
});
console.log(apples.length);

apples.push(pinkApple);
console.log(apples);

// Objekte-TS-Level-1_4
console.log("Objekte-TS-Level-1_4");

type Pet = {
	tiertyp: string;
	namen: string[];
};

const unsereHaustiere: Pet[] = [
	{
		tiertyp: "Katze",
		namen: ["Gipsy", "Nala", "Dinky"],
	},
	{
		tiertyp: "Hunde",
		namen: ["Knöpfchen", "Pinselchen", "Droopy"],
	},
];

console.log(unsereHaustiere[0].namen[1]);
console.log(unsereHaustiere[1].namen[2]);
console.log(unsereHaustiere[1].namen);

unsereHaustiere[0].namen[2] = "Pinky";
unsereHaustiere[1].namen[2] = "Snoopy";

const hamsterObject: Pet = {
	tiertyp: "Hamster",
	namen: ["Balu", "Mogli"],
};

unsereHaustiere.push(hamsterObject);

console.log(unsereHaustiere);

// Objekte-TS-Level-1_5
console.log("Objekte-TS-Level-1_5");

type Lager = {
	schreibtisch: {
		schublade: string;
	};
	schrank: {
		"Obere Schublade": {
			Ordner1: string;
			Ordner2: string;
		};
		"Untere Schublade": string;
	};
};

const unserLager: Lager = {
	schreibtisch: {
		schublade: "Hefter",
	},
	schrank: {
		"Obere Schublade": {
			Ordner1: "Dokumente",
			Ordner2: "Geheimnisse",
		},
		"Untere Schublade": "Cola",
	},
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schreibtisch.schublade);
console.log(unserLager.schrank["Untere Schublade"]);

// Objekte-TS-Level-1_6
console.log("Objekte-TS-Level-1_6");

type Musik = {
	kunstler: string;
	title: string;
	release_jahr: number;
	formate: string[];
	gold: boolean;
};

const meineTopVier: Musik[] = [
	{
		kunstler: "The Beatles",
		title: "Abbey Road",
		release_jahr: 1969,
		formate: ["LP", "CD", "MC", "Download"],
		gold: true,
	},
	{
		kunstler: "Pink Floyd",
		title: "Dark Side of the Moon",
		release_jahr: 1978,
		formate: ["CS", "CD", "LP", "Download"],
		gold: true,
	},
	{
		kunstler: "Led Zeppelin",
		title: "Led Zeppelin IV",
		release_jahr: 1971,
		formate: ["CS", "LP", "Download"],
		gold: true,
	},
	{
		kunstler: "Metallica",
		title: "Kill ’Em All und Ride the Lightning",
		release_jahr: 1983,
		formate: ["LP", "CD", "MC", "Download"],
		gold: true,
	},
];

console.log(meineTopVier[0].kunstler);
console.log(meineTopVier[1].formate[3]);
console.log(meineTopVier[1].gold);
console.log(
	`${meineTopVier[2].release_jahr} und ${meineTopVier[3].release_jahr}`
);
console.log(meineTopVier[3].formate[2]);
console.log(meineTopVier[3].title.slice(17, 21));

const bowie: Musik = {
	kunstler: "David Bowie",
	title: "The Man Who Sold the World",
	release_jahr: 1970,
	formate: ["LP", "CD", "MC", "Download"],
	gold: true,
};

meineTopVier.push(bowie);
console.log(meineTopVier);

// Objekte-TS-Level-2_2
console.log("Objekte-TS-Level-2_2");

type PeriodActive = {
	start: number;
	end: number | string;
	extra?: number;
};

type Singer = {
	name: string;
	country: string;
	period_active: PeriodActive;
	genre: string;
};

const singers: Singer[] = [
	{
		name: "The Beatles",
		country: "United Kingdom",
		period_active: { start: 1960, end: 1970 },
		genre: "Rock / Pop",
	},
	{
		name: "Elvis Presley",
		country: "United States",
		period_active: { start: 1954, end: 1977 },
		genre: "Rock and roll",
	},
	{
		name: "Michael Jackson",
		country: "United States",
		period_active: { start: 1964, end: 2009 },
		genre: "Pop / Rock / Dance / Soul / R&B",
	},
	{
		name: "Elton John",
		country: "United Kingdom",
		period_active: { start: 1964, end: "present" },
		genre: "Pop / Rock",
	},
	{
		name: "Madonna",
		country: "United States",
		period_active: { start: 1979, end: "present" },
		genre: "Pop / Dance / Electronica",
	},
	{
		name: "Led Zeppelin",
		country: "United Kingdom",
		period_active: { start: 1968, end: 1980 },
		genre: "Hard rock / Blues rock / Folk rock",
	},
	{
		name: "Rihanna",
		country: "United States",
		period_active: { start: 2005, end: "present" },
		genre: "R&B / Pop / Dance / Hip-hop",
	},
	{
		name: "Pink Floyd",
		country: "United Kingdom",
		period_active: { start: 1965, end: 1996, extra: 2014 },
		genre: "Progressive rock / Psychedelic rock",
	},
];

const singerSequence: Singer[] = singers.slice().sort((singerA, singerB) => {
	return singerA.name.localeCompare(singerB.name);
});

console.log(singerSequence);

const singerStarts: Singer[] = singers.slice().sort((elementA, elementB) => {
	return (elementA.period_active.start) - (elementB.period_active.start);
});

console.log(singerStarts);
