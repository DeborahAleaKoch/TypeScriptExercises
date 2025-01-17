// Enum-TS-Level-2_2
enum ClothingColor {
	gelb = "#fde047",
	orange = "#f97316",
	pink = "#db2777",
	blau = "#3b82f6",
	lila = "#a855f7",
	grau = "#a3a3a3",
}
const allColors: string[] = [
	"#fde047",
	"#f97316",
	"#db2777",
	"#3b82f6",
	"#a855f7",
	"#a3a3a3",
];

const divParentElement =
	document.querySelector<HTMLDivElement>("#button-div-parent");

function createButtonWithColor() {
	if (divParentElement) {
		allColors.forEach((entry) => {
			const newButton = document.createElement("button");
			divParentElement.appendChild(newButton);
			newButton.className = `border-2 border-gray-200 w-10 h-10 m-2 rounded `;
			newButton.style.backgroundColor = entry;
		});
	}
}

createButtonWithColor();
