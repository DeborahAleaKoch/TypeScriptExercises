//Utility-Types-TS-Level-3_1

//Lernziel: Anwendung von partial

//Erstelle dort ein Interface ISmoothie mit folgenden Eigenschaften: name, ingredients, size (Enum: small, medium…) und price
//Überlege dir sinnvolle Datentypen für die Eigenschaften

enum Size {
	"small",
	"medium",
	"large",
}

interface ISmoothie {
	name: string;
	ingredients: string;
	size: Size;
	price: number;
}

type PartialSmoothie = Partial<ISmoothie>;

//Erstelle eine Funktion customizeSmoothie, die ein Smoothie-Objekt (basicSmoothie) und ein Partial<ISmoothie>-Objekt (customizedSmoothie) als Parameter hat
//Wenn eine Eigenschaft im customizedSmoothie gesetzt ist, soll sie die Eigenschaft im basicSmoothie überschreiben
//Rückgabewert der Funktion ist ISmoothie
function customizeSmoothie(
	basicSmoothie: ISmoothie,
	customizedSmoothie: PartialSmoothie
): ISmoothie {
	const neWSmoothie = { ...basicSmoothie, ...customizedSmoothie };

	console.log(neWSmoothie);

	return neWSmoothie;
}

const smoothieI: ISmoothie = {
	name: "banane",
	ingredients: "banenen, ananas",
	size: Size.small,
	price: 3.4,
};

customizeSmoothie(smoothieI, { price: 5 });
