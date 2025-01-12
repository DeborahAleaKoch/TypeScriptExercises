// Dom-Elements-TS-Level-2_3

const buttonForChangeColor =
	document.querySelector<HTMLButtonElement>("button");
const changeColorParagaphs = document.getElementsByTagName("p");

if (buttonForChangeColor && changeColorParagaphs) {
	buttonForChangeColor.addEventListener("click", function () {
		const colorArray: string[] = ["#f6c89f", "#ffe7d1", "#4b8e8d"];

		for (let i = 0; i < changeColorParagaphs.length; i++) {
			changeColorParagaphs[i].style.backgroundColor = colorArray[i];
		}
	});
}
