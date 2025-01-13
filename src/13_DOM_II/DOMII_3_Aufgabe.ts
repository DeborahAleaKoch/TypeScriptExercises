const firstName = document.querySelector<HTMLInputElement>("#vorname");

const lastName = document.querySelector<HTMLInputElement>("#nachname");

const selectMenu = document.querySelector<HTMLSelectElement>("#land");

const submitButton = document.querySelector("#submit");

type SimplePerson = {
	firstname: string;
	lastname: string;
	country: string;
};

if (submitButton && firstName && lastName && selectMenu) {
	submitButton.addEventListener("click", function (event) {
		event.preventDefault();
		const firstNameValue = firstName.value;
		const lastNameValue = lastName.value;
		const selectMenuValue = selectMenu.value;

		console.log(firstNameValue, lastNameValue, selectMenuValue);

		const person: SimplePerson = {
			firstname: firstNameValue,
			lastname: lastNameValue,
			country: selectMenuValue,
		};
		console.log(person);
	});
}
