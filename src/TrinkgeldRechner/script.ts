function getTip() {
	const price = (document.querySelector("#invoice") as HTMLInputElement)
		.valueAsNumber;

	const numberOfPeople = (
		document.querySelector("#numberOfPeople") as HTMLInputElement
	).valueAsNumber;

	const qualityOfService = Number(
		(document.querySelector("#service") as HTMLInputElement).value
	);

	console.log(price);
	console.log(numberOfPeople);
	console.log(qualityOfService);

	const invoiceWithTip = document.querySelector(
		"#invoiceWithTip"
	) as HTMLDivElement;
	const tip = document.querySelector("#tip") as HTMLDivElement;
	const personPrice = document.querySelector("#personPrice") as HTMLDivElement;

	const priceWithTip = price * qualityOfService;
	const onlyTip = priceWithTip - price;
	const pricePerPerson = priceWithTip / numberOfPeople;

	console.log(priceWithTip);
	console.log(onlyTip);
	console.log(pricePerPerson);

	if (Number.isNaN(priceWithTip)) {
		return;
	} else {
		invoiceWithTip.innerHTML = `<p>Die Gesamtsumme beträgt ${priceWithTip.toFixed(
			2
		)} €</p>`;
		tip.innerHTML = `<p>Die Trinkgeldsumme beträgt ${onlyTip.toFixed(2)} €</p>`;
		personPrice.innerHTML = `<p>Der Preis pro Person beträgt ${pricePerPerson.toFixed(
			2
		)} €</p>`;
	}
}

const button = document.querySelector("#btn") as HTMLButtonElement;

button.onclick = getTip;
