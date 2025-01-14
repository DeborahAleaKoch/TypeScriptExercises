// Functions-TS-Level-1_6

// // - Lernziel: Funktionen mit Default-Parametern nutzen
//  Lege einen Typ Monster mit folgenden Eigenschaften an
// name, type, health, strength, speed
//  Alle Eigenschaften sind Pflicht (nicht optional)
//  Überlege dir selbst, welche Datentypen hierfür sinnvoll sein könnten
//  Erstelle eine Funktion createMonster, die ein Monster erzeugt und zurückgibt
//  name und type müssen immer an die Funktion übergeben werden
//  werden health, strength und speed nicht angegeben, sollen diese Standardwerte verwendet werden
//      health = 100
//      strength = 50
//      speed = 25
//  Lege mit Hilfe der Funktion mehrere Monster an, gebe dabei
//      2 Parameter
//      3 Parameter
//      4 Parameter
//      5 Parameter

//     an

//  Lass dir jeweils das erzeugte Objekt in der Konsole ausgeben

type Monster = {
	name: string;
	type: string;
	health?: number;
	strength?: number;
	speed?: number;
};

function createMonster(
	name: string,
	type: string,
	health: number = 100,
	strength: number = 50,
	speed: number = 25
) {
	console.log(
		`Name:${name}, Type:${type} LebensEnergie von: ${health}HP, mit einer Stärke von ${strength}KP und einer Geschwindigkeit von: ${speed}`
	);
	// hier wird ein neues Monster in Object-Schreibweise dargestellt
	const newMonster = {
		name,
		type,
		health,
		strength,
		speed,
	};
	console.log(newMonster);
}

createMonster("Ladon", "Drache");
createMonster("Lailaps", "Hund", 300);
createMonster("Medusa", "Gorgone", 500, 300);
createMonster("Karkinos", "Krebs", 350, 200, 130);
