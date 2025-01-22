//fetch-level-2_1

// Da du dir die Daten jetzt schon in der Konsole ausgeben lassen kannst, darfst du als nächstes für jeden Datensatz eine Kombination aus Bild und Autor:in in ein figure-Element wrappen und in deinem HTML ausgeben lassen

const imgOutput = document.querySelector("#picsum-area");

type Images = {
	id: number;
	author: string;
	width: number;
	height: number;
	url: string;
	download_url: string;
};

fetch("https://picsum.photos/v2/list")
	.then((response) => {
		return response.json();
	})
	.then((imgData: Images[]) => {
		const totalUrl = imgData.map((separatedPic) => {
			return separatedPic.download_url;
		});
		const allAuthors = imgData.map((separatedPic) => {
			return separatedPic.author;
		});

		for (let i = 0; i <= totalUrl.length - 1; i++) {
			if (imgOutput) {
				const newFigureElement = document.createElement("figure");
				newFigureElement.className = "flex flex-col item-center ";
				imgOutput.appendChild(newFigureElement);
				const newImgElement = document.createElement("img");
				newImgElement.src = totalUrl[i];
				newImgElement.className = "";
				newFigureElement.appendChild(newImgElement);
				const newFigcaption = document.createElement("figcaption");
				newFigcaption.className = "text-center";
				newFigcaption.textContent = allAuthors[i];
				newFigureElement.appendChild(newFigcaption);
			}
		}
	})
	.catch((error) => {
		console.error(error);
	});
