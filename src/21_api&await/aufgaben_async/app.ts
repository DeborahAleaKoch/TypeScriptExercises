import { waitForTwoSeconds } from "./patient-waiter";

// Lege eine asynchrone Funktion mit dem Namen main an
// Schreibe in der Funktion auf die Konsole “Hi, here I am…”
async function main() {
	console.log("Hi, here I am ...");
	//  Rufe dann waitForTwoSeconds auf ohne zu warten (ohne await)
	waitForTwoSeconds();
	// Schreibe danach auf die Konsole “Hello…”
	console.log("Hello..");
	//Schreib danach auf die Konsole “Can you hear me…”
	console.log("Can you hear me...");
}

main();
//Ausgabe in der Console:
// Hi, here I am ...
// app.ts:10 Hello..
// app.ts:12 Can you hear me...
// patient-waiter.ts:8 Thanx 4 the patience 💜

//async-TS-Level-1_2

//Jetzt soll auf die Ausführung von waitForTwoSeconds gewartet werden
//Nutze das Schlüsselwort await an der richtigen Stelle in der Funktion main
//Schau dir nun die Reihenfolge in der Ausgabe an

async function main2() {
	console.log("Hi, here I am ...");
	//  Rufe dann waitForTwoSeconds auf ohne zu warten (ohne await)
	await waitForTwoSeconds();
	// Schreibe danach auf die Konsole “Hello…”
	console.log("Hello..");
	//Schreib danach auf die Konsole “Can you hear me…”
	console.log("Can you hear me...");
}

main2();

// Ausgabe in der Console:

// Hi, here I am ...
// patient-waiter.ts:8 Thanx 4 the patience 💜
// app.ts:28 Hello..
// app.ts:30 Can you hear me...
