const selectColorChange =
	document.querySelector<HTMLSelectElement>("#farbeAuswahlen");

const colorChangeButton = document.querySelector<HTMLButtonElement>("#button");

const bodyElement = document.querySelector<HTMLBodyElement>("body");

if (selectColorChange && colorChangeButton && bodyElement) {
	colorChangeButton.addEventListener("click", function (event) {
		event.preventDefault();
		const selectValue = selectColorChange.value.split(" ").join("");
		console.log(selectValue);
		bodyElement.style.backgroundColor = selectValue;
	});
}
