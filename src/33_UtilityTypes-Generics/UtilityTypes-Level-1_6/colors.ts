//Lege eine neue Datei an colors.ts an

//Erstelle dort einen neuen Type BasicColors mit den möglichen Werten:
// RED, BLUE, GREEN, YELLOW, BLACK, WHITE

type BasicColors = "RED" | "BLUE" | "GREEN " | "YELLOW" | "BLACK" | "WHITE";

//Erstelle einen weiteren Type RealColors auf Basis von BasicColors mit Exclude
//Werte RED, BLUE, GREEN, YELLOW
type RealColors = Exclude<BasicColors, "BLACK" | "WHITE">;

//Lege eine Funktion showColors mit einem Parameter vom Typ RealColors an

function showColors(color: RealColors) {
	// Gib dort die Farbe auf der Konsole aus
	console.log(color);
	return color;
}

//Versuche ‘BLACK’ zu übergeben
// showColors('BLACK') // -> Nicht zugewiesen ->> Fehler

//Übergebe einen gültigen Wert

showColors("RED");
