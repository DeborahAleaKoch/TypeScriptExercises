// alle inputfelder aus dem HTML Datei initialisieren

const inputFirstName = document.querySelector<HTMLInputElement>("#firstname");
const inputLastName = document.querySelector<HTMLInputElement>("#lastname");
const inputBirthDate = document.querySelector<HTMLInputElement>("#birthdate");
const inputGender = document.querySelector<HTMLInputElement>("#geschlecht");
const inputTricot = document.querySelector<HTMLInputElement>("#tricot-number");
const inputPosition = document.querySelector<HTMLInputElement>("#position");
const inputLike = document.querySelector<HTMLInputElement>("#school");
const inputUrl = document.querySelector<HTMLInputElement>("#img-url");
const button = document.querySelector<HTMLButtonElement>("#add-button");

const outputSection = document.querySelector<HTMLDivElement>("#output-cards");

// erstellen von Type durch die Inhalte der Input Felder
type Character = {
	firstName: string;
	lastName: string;
	birthDate: string;
	gender: string;
	tricotNumber: number;
	position: string;
	like: string;
	img: string;
};

// die values der einzelenen inputFelder heraus filtern
function getValuesFromInput(): void {
	if (
		!(
			inputFirstName &&
			inputLastName &&
			inputBirthDate &&
			inputGender &&
			inputPosition &&
			inputLike &&
			inputTricot &&
			inputUrl &&
			outputSection
		)
	) {
		return;
	}
	const firstNameValue = inputFirstName.value;
	const lastNameValue = inputLastName.value;
	const birthDateValue = inputBirthDate.value;
	const genderValue = inputGender.value;
	const tricotValue = Number(inputTricot.value);
	const likeValue = inputLike.value;
	const positionValue = inputPosition.value;
	const urlValue = inputUrl.value;

	const character: Character = {
		firstName: firstNameValue,
		lastName: lastNameValue,
		birthDate: birthDateValue,
		gender: genderValue,
		tricotNumber: tricotValue,
		position: positionValue,
		like: likeValue,
		img: urlValue,
	};
	console.log(character);

	const newDivElement = document.createElement("div");

	// newDivElement.innerHTML += `<p>${firstNameValue}</p> <p>${lastNameValue}</p>`;
	newDivElement.style.backgroundImage = `url(${urlValue})`;
	newDivElement.className = `bg-cover w- h-80 bg-no-repeat p-1`;
	newDivElement.innerHTML =
		// <img class='border-2 border-gray-500 h-60 w-32 href='${urlValue}'>
		`<p>${firstNameValue}  ${lastNameValue}</p>`;
	outputSection.appendChild(newDivElement);

	// const newImgElement = document.createElement('img')
	// // newDivElement.appendChild(newImgElement)
	// newImgElement.className = 'w-1/2 h-3/4'
	// newImgElement.style.backgroundImage = urlValue;
	console.log("nach html ausgabe");
}

// eventlistener auf den butten anwenden
if (button) {
	button.addEventListener("click", getValuesFromInput);
} else {
	console.log("hier ist was schief gelaufen");
}
