// alle inputfelder aus dem HTML Datei initialisieren

const inputFirstName = document.querySelector<HTMLInputElement>("#firstname");
const inputLastName = document.querySelector<HTMLInputElement>("#lastname");
const inputBirthDate = document.querySelector<HTMLInputElement>("#birthdate");
const inputGender = document.querySelector<HTMLInputElement>("#geschlecht");
const inputTricot = document.querySelector<HTMLInputElement>("#tricot-number");
const inputPosition = document.querySelector<HTMLInputElement>("#position");
const inputSchool = document.querySelector<HTMLInputElement>("#school");
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
	school: string;
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
			inputSchool &&
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
	const schoolValue = inputSchool.value;
	const positionValue = inputPosition.value;
	const urlValue = inputUrl.value;

	const character: Character = {
		firstName: firstNameValue,
		lastName: lastNameValue,
		birthDate: birthDateValue,
		gender: genderValue,
		tricotNumber: tricotValue,
		position: positionValue,
		school: schoolValue,
		img: urlValue,
	};
	console.log(character);

	const newDivElement = document.createElement("div");

	outputSection.appendChild(newDivElement);
	newDivElement.textContent = `${character}`;
}

// eventlistener auf den butten anwenden
if (button) {
	button.addEventListener("click", getValuesFromInput);
} else {
	console.log("hier ist was schief gelaufen");
}
