import ky from "ky";
import { Product } from "./ProductTypes";

const outputSection = document.querySelector<HTMLDivElement>("#output-section");

//mit ky
async function getProduct() {
	const productDetails = await ky
		.get<Product[]>("https://fakestoreapi.com/products")
		.json();
	console.log(productDetails);
	renderProductEntry(productDetails);
	return productDetails;
}

getProduct();

function renderProductEntry(entry: Product[]) {
	if (outputSection) {
		entry.forEach((element) => {
			//neuen Div Container erstellen, in dem alle anderen DOM Elemente hineinkommen:
			const newDivElement = document.createElement("div");
			newDivElement.className = " border-2 border-orange-400 rounded-md  my-2";
			newDivElement.innerHTML = "";

			//ein element schaffen für die Darstellung von Bild und titel:
			const newImageElement = document.createElement("img");
			newImageElement.className = "w-full h-48 object-contain";
			newImageElement.src = element.image;
			newDivElement.appendChild(newImageElement);

			const newFigcaptionElement = document.createElement("figcaption");
			newFigcaptionElement.className = " ";
			newFigcaptionElement.textContent = element.title;
			newDivElement.appendChild(newFigcaptionElement);

			const newDivPriceElement = document.createElement("div");
			newDivPriceElement.className = "font-bold flex flex-2 bg-amber-200 h-12";
			newDivPriceElement.textContent = `$ ${element.price.toFixed(2)}`;
			newDivElement.appendChild(newDivPriceElement);
			outputSection.appendChild(newDivElement);
		});
	}
}

const electroButton = document.querySelector("#electro");
if (electroButton && outputSection) {
	electroButton.addEventListener("click", () => {});
}
