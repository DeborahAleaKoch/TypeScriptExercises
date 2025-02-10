const timeOutput = document.querySelector<HTMLDivElement>("#time");
const inputTimeNumber = document.querySelector<HTMLInputElement>("#minutes");
const startButton = document.querySelector<HTMLButtonElement>("#start-button");
const stopButton = document.querySelector<HTMLButtonElement>("#pause-button");
const restartButton =
	document.querySelector<HTMLButtonElement>("#restart-button");

if (
	timeOutput &&
	inputTimeNumber &&
	startButton &&
	stopButton &&
	restartButton
) {
	const inputValue = inputTimeNumber.value;
}
