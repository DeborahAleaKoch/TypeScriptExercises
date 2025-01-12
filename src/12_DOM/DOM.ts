// DOM-TS_Level-1_4
const inputAddText = document.querySelector<HTMLInputElement>("#input-1-4");
const buttonAddText = document.querySelector<HTMLButtonElement>(
	"#add-button-level1-4"
);
const outputTextByButtonClick =
	document.querySelector<HTMLParagraphElement>("#output-level1-4");

if (inputAddText && buttonAddText && outputTextByButtonClick) {
	buttonAddText.addEventListener("click", function (event) {
		event.preventDefault();
		const inputValue = inputAddText.value;
		const timeStamp = new Date();
		outputTextByButtonClick.innerHTML += `<p>${timeStamp} : ${inputValue}</p>`;
		inputAddText.value = "";
	});
}

// DOM-TS-Level-1_2
const divBox = document.getElementById("info");
if (divBox) {
	divBox.innerHTML += `<h1>Hello World</h1>`;
	divBox.innerHTML += `<h2>How are you?</h2>`;
}
const divContainer = document.getElementById("container");
if (divContainer) {
	divContainer.innerHTML += `<p>This is a paragraph</p>`;

	const newDivElement = document.createElement("input");
	divContainer.appendChild(newDivElement);

	newDivElement.setAttribute("type", "text");
}

// DOM-TS-Level-1_3

const imageGallery = document.querySelector("#gallery");
const imgFigure = new Image();
imgFigure.src = "./img/liquid.jpg";

if (imageGallery) {
	// imageGallery.innerHTML += `<figure>${imgFigure.src}</figure> figur one`;
	for (let i = 1; i <= 3; i++) {
		const newFigureElement = document.createElement("figure");
		const figcaption = document.createElement("figcaption");
		newFigureElement.innerHTML =
			'<img src="./img/liquid.jpg" alt="" class="m-2">';
		figcaption.innerHTML = `Figure Number ${i}`;
		imageGallery.appendChild(newFigureElement);
		imageGallery.appendChild(figcaption);
	}
}

// Dom-Elements-TS-Level-1_1
const shoppingInput = document.querySelector<HTMLInputElement>("#inputText");
const shoppingButton =
	document.querySelector<HTMLButtonElement>("#shopping-button");
const shoppingListEntries = document.querySelector("#myList");

if (shoppingInput && shoppingButton && shoppingListEntries) {
	shoppingButton.addEventListener("click", function (event) {
		event.preventDefault();
		const inputValue = shoppingInput.value;
		const newShoppingListEntry = document.createElement("li");

		newShoppingListEntry.textContent = inputValue;
		shoppingListEntries.appendChild(newShoppingListEntry);

		shoppingInput.value = "";
	});
}

// Dom-Elements-TS-Level-1_2

const buttonClickChangeColor =
	document.querySelector<HTMLButtonElement>("button.example");
const colorChangeElements =
	document.querySelectorAll<HTMLDivElement>(".example");

if (buttonClickChangeColor && colorChangeElements) {
	buttonClickChangeColor.addEventListener("click", function (event) {
		event.preventDefault;
		colorChangeElements.forEach(
			(element) => (element.style.backgroundColor = "pink")
		);
	});
}

// DOM-TS-Level-1_5
const buttonToGetURL = document.querySelector<HTMLButtonElement>("#getURL");
const outputURL = document.querySelector<HTMLDivElement>("#output-URL");
// const outputElementOfURL = document.createElement("p");

function showURL(): void {
	if (outputURL) {
		outputURL.innerHTML = `<p>${window.location}</p> `;
	}
}

if (buttonToGetURL && outputURL) {
	buttonToGetURL.addEventListener("click", showURL);
}
