//Utility-Types-TS-Level-2_1
//Lernziel: Anwendung von partial

//Erstelle dort ein Interface ITea mit folgenden Eigenschaften: name, type, temperature, brewingTime

interface ITea {
	name: string;
	type: string;
	temperature: number;
	brewingTime: number;
}

//Erstelle dann einen Type PartialTea, das ebenfalls diese Eigenschaften enthält, die aber alle optional sind

type PartialTea = Partial<ITea>;

//Schreibe eine Funktion prepareTea, die ein PartialTea-Objekt akzeptiert und auf der Konsole ausgibt “Preparing [tea.name] - will be ready in [tea.brewingTime]”

function prepareTea(tea: PartialTea) {
	//Gib einen Fehler auf der Konsole aus, falls name und brewingTime nicht gesetzt sind und brich die Funktion ab
	if (tea === null) {
		console.warn("hier fehlt etwas");
		return;
	} else {
		console.log(
			`Preparing ${tea.name} - will be ready in ${tea.brewingTime} minutes`
		);
	}
}

//Lege ein Objekt vom Typ ITea an und übergebe es der Methode prepareTea

const greenTea: ITea = {
	name: "Sencha",
	type: "green",
	temperature: 80,
	brewingTime: 2,
};

prepareTea(greenTea);

//Lege ein Objekt vom Typ PartialTea an und übergebe es der Methode prepareTea

const blackTea: PartialTea = {
	name: "Assam",
	temperature: 80,
	brewingTime: 3,
};

prepareTea(blackTea);
