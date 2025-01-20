// console.log('Bom-TS-Level-1_1');
console.log("Start: Warte für drei Sekunden");

setTimeout(
	() => console.log("Erledigt: Du hast drei Sekunden gewartet!"),
	3000
);

let count = 10;

const timer = setInterval(function () {
	console.log(count);
	count--;

	if (count === 1) {
		clearInterval(timer);
		console.log(count);
	}
	if (count === 1) {
		console.log("Endlich Feierabend");
	}
}, 1000);
