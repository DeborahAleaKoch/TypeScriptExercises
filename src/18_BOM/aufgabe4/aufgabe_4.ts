// Bom-TS-Level-2_1

const count = document.querySelector<HTMLDivElement>("#count");
const divTextElement = document.querySelector<HTMLDivElement>(".message");

if (count && divTextElement) {
	let countDown = 10;
	const timer = setInterval(function () {
		countDown--;
		if (countDown === 0) {
			clearInterval(timer);
		}
		count.textContent = countDown.toString();
		if (countDown === 0) {
            divTextElement.style.opacity = '0'
			// divTextElement.remove();
		}
	}, 1000);
}
