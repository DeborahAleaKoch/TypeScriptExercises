// Bom-TS-Level-1_2
// console.log("Bom-TS-Level-1_2");

const button = document.querySelector<HTMLButtonElement>("#btn");
const output = document.querySelector<HTMLDivElement>(".zeit");

let count = 100;

function countDown() {
	const time = setInterval(() => {
		count--;
		// console.log("vor der if schleife", count);
		if (output) {
			output.innerHTML = `${count} %`;
		}
		if (count === 0) {
			clearInterval(time);
		}
	}, 100);
}

if (button && output) {
	button.addEventListener("click", countDown);
}
