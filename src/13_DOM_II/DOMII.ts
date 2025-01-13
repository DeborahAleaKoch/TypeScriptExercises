// $ Dom-Elements-TS-Level-1_3
const listElements = document.querySelector<HTMLLIElement>("#myList");
const buttonElement = document.querySelector<HTMLButtonElement>(".unten");
const outputField = document.querySelector<HTMLOutputElement>("output");

if (listElements === null && buttonElement === null && outputField === null) {
	console.log("upisii");
} else if (listElements && buttonElement && outputField) {
	const firstButton = buttonElement.firstElementChild;
	const firstListElement = listElements.firstChild;
	if (firstButton && firstListElement) {
		firstButton.addEventListener("click", function () {
			const firstListChild = listElements.firstElementChild;

			if (firstListChild) {
				outputField.textContent = firstListChild.textContent;
			}
		});
	}

	if (firstButton) {
		const GTA = listElements.lastElementChild;
		const buttonZwei = firstButton.nextElementSibling;
		if (buttonZwei && GTA && firstButton && firstListElement) {
			buttonZwei.addEventListener("click", function () {
				const lastListChild = listElements.lastElementChild;

				console.log(lastListChild);

				if (lastListChild) {
					outputField.textContent = lastListChild.textContent;
				}
			});
		}
	}
}
