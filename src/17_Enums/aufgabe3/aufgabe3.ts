// Enum-TS-Level-2_1
console.log(" Enum-TS-Level-2_1");

// Definiere ein Enum HtmlError mit folgenden HTML-Error-Codes

enum HtmlError {
	Ok = 200,
	Redirect = 300,
	BadRequest = 400,
	InternalServerError = 500,
}

function showHtmlError() {
	const randomNumber = Math.floor(Math.random() * 5 + 1);
	// console.log(randomNumber)
	if (randomNumber === 0 || randomNumber === 1 || randomNumber === 2) {
		console.error(HtmlError.Ok);
	} else if (randomNumber === 3) {
		console.error(HtmlError.Redirect);
	} else if (randomNumber === 4) {
		console.error(HtmlError.BadRequest);
	} else if (randomNumber === 5) {
		console.error(HtmlError.InternalServerError);
	}
}

showHtmlError();

// for (const Error in HtmlError) {
// 	console.log(HtmlError[Error]);
// }
