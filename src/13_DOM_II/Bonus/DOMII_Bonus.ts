const pinkButton = document.querySelector<HTMLButtonElement>("#pink-button");
const purpleButton =
	document.querySelector<HTMLButtonElement>("#purple-button");
const orangeButton =
	document.querySelector<HTMLButtonElement>("#orange-button");

const redRageInput = document.querySelector<HTMLInputElement>("#red-slider");
const greenRageInput =
	document.querySelector<HTMLInputElement>("#green-slider");
const blueRageInput = document.querySelector<HTMLInputElement>("#blue-slider");

const bodyElement = document.querySelector<HTMLBodyElement>("body");

if (pinkButton && purpleButton && orangeButton && bodyElement) {
	pinkButton.addEventListener("click", function (event) {
		event.preventDefault();
		const pinkColor = "pink";
		bodyElement.style.backgroundColor = pinkColor;
	});

	purpleButton.addEventListener("click", function (event) {
		event.preventDefault();
		const purpleColor = "purple";
		bodyElement.style.backgroundColor = purpleColor;
	});

	orangeButton.addEventListener("click", function (event) {
		event.preventDefault();
		const orangeColor = "orange";
		bodyElement.style.backgroundColor = orangeColor;
	});
}

if (redRageInput && greenRageInput && blueRageInput) {
}

// to hex code -> hexString = yourNumber.toString(16)
// oder yourNumber = parseInt(hexString, 16)

if (bodyElement && redRageInput && greenRageInput && blueRageInput) {
}
