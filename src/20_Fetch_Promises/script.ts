// fetch-level-1_1

//Nutze den Endpunkt /list der Picsum API und lass dir die Liste der Bilder in der Console ausgeben.
// Fange mögliche Fehler beim Aufruf der API ab und zeige sie in der Konsole an

type Image = {
	id: string;
	author: string;
	width: number;
	height: number;
	url: string;
	download_url: string;
};

fetch("https://picsum.photos/v2/list")
	.then((response) => {
		// console.log(response);
		return response.json();
	})
	.then((entry: Image) => {
		console.log(entry);
	})
	.catch((error) => {
		console.log(error);
	});



