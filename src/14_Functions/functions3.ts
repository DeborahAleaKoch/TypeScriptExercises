// Functions-TS-Level-3_1
const headline = document.querySelector<HTMLParagraphElement>("#headline");

const ballColorChangeOne =
	document.querySelector<HTMLDivElement>("#first-ball");
const ballColorChangeTwo =
	document.querySelector<HTMLDivElement>("#second-ball");

const ballColorChangeThree =
	document.querySelector<HTMLDivElement>("#third-ball");

const ballColorChangeFour =
	document.querySelector<HTMLDivElement>("#fourth-ball");

const bodyElement = document.querySelector<HTMLBodyElement>("body");

function changeColorOnClick(textColor: string, backgroundColor: string): void {
	if (headline && bodyElement) {
		headline.style.color = textColor;
		bodyElement.style.backgroundColor = backgroundColor;
	} else {
		return window.alert("huppali, hier ist was schief gelaufen!");
	}
}

if (ballColorChangeOne) {
	ballColorChangeOne.addEventListener("click", (event) =>
		changeColorOnClick("red", "darkorange")
	);
}
if (ballColorChangeTwo) {
	ballColorChangeTwo.addEventListener("click", (event) =>
		changeColorOnClick("limegreen", "yellow")
	);
}
if (ballColorChangeThree) {
	ballColorChangeThree.addEventListener("click", (event) =>
		changeColorOnClick("deeppink", "black")
	);
}

if (ballColorChangeFour) {
	ballColorChangeFour.addEventListener("click", (event) =>
		changeColorOnClick("lightblue", "purple")
	);
}

// Lass dir die Superballs auf Basis eines Arrays von Objekten im Code generieren

const otherSection = document.querySelector<HTMLDivElement>("#more-balls");

type SuperBall = {
	textColor: string;
	backgroundColor: string;
};

const colorForSuperBalls: SuperBall[] = [
	{ textColor: "wheat", backgroundColor: "darksalmon" },
	{ textColor: "lightseagreen", backgroundColor: "darkseagreen" },
	{ textColor: "lemonchiffon", backgroundColor: "lightsteelblue" },
	{ textColor: "lime", backgroundColor: "maroon" },
	{ textColor: "darkgoldenrod", backgroundColor: "darkslateblue" },
];

function newSectionOfSuperBalls() {
	if (otherSection) {
		colorForSuperBalls.forEach((entry: SuperBall) => {
			const newBall = document.createElement("div");
			newBall.onclick = () => {
				changeColorOnClick(entry.textColor, entry.backgroundColor);
			};
			newBall.style.background = `linear-gradient(45deg, ${entry.textColor} 0 50%, ${entry.backgroundColor} 50% 100%)`;
			otherSection.appendChild(newBall);
		});
	}
}

newSectionOfSuperBalls();
