import ky from "ky";
import { Product } from "./ProductTypes";

const outputSection = document.querySelector<HTMLDivElement>("#output-section");
const sortingSelector =
	document.querySelector<HTMLSelectElement>("#select-menu");

//mit ky
async function getProducts() {
	const productDetails = await ky
		.get<Product[]>("https://fakestoreapi.com/products")
		.json();
	console.log(productDetails);
	return productDetails;
}

const products = await getProducts();
renderProducts(products);

function renderProducts(products: Product[]) {
	if (outputSection) {
		outputSection.innerHTML = "";

		if (products.length === 0) {
			outputSection.textContent = "Hupsi";
			return;
		}

		products.forEach((product) => {
			//neuen Div Container erstellen, in dem alle anderen DOM Elemente hineinkommen:
			const newDivElement = document.createElement("div");
			newDivElement.className = "px-2 border-2 shadow-md rounded-md   ";

			//ein element schaffen für die Darstellung von Bild und titel:
			const newImageElement = document.createElement("img");
			newImageElement.className = "w-full h-48 object-contain my-4";
			newImageElement.src = product.image;
			newImageElement.title = `${product.title}`;
			newDivElement.appendChild(newImageElement);

			const newFigcaptionElement = document.createElement("figcaption");
			newFigcaptionElement.className = "px-2 mt-4";

			if (product.title.length >= 50) {
				const productTitleShorted = product.title.slice(0, 45);
				console.log(productTitleShorted);
				newFigcaptionElement.textContent = `${productTitleShorted}...`;
			} else {
				newFigcaptionElement.textContent = `${product.title}`;
			}
			newFigcaptionElement.title = `${product.title}`;
			newDivElement.appendChild(newFigcaptionElement);

			const newDivPriceElement = document.createElement("div");

			newDivPriceElement.className =
				"font-bold flex justify-between item-center py-4 px-2 border-t-2 ";
			const newParagraphElement = document.createElement("p");
			newParagraphElement.textContent = `$ ${product.price.toFixed(2)}`;
			newDivPriceElement.appendChild(newParagraphElement);

			const newButtonElement = document.createElement("button");
			newButtonElement.textContent = "Add to Card";
			newButtonElement.className = "border-2 border-pink-400 px-2 rounded";
			newDivElement.appendChild(newDivPriceElement);
			newDivPriceElement.appendChild(newButtonElement);
			outputSection.appendChild(newDivElement);
		});
	}
}

const categoryButtons = [
	{ buttonId: "#electronics", categoryName: "electronics" },
	{ buttonId: "#jewelery", categoryName: "jewelery" },
	{ buttonId: "#men", categoryName: "men's clothing" },
	{ buttonId: "#women", categoryName: "women's clothing" },
];

if (outputSection) {
	categoryButtons.forEach((categoryButton) => {
		const buttonElement = document.querySelector(categoryButton.buttonId);
		if (buttonElement) {
			buttonElement.addEventListener("click", () => {
				const filteredProducts = products.filter(
					(product) => product.category === categoryButton.categoryName
				);
				sortProducts(filteredProducts);

				renderProducts(filteredProducts);
			});
		}
	});
}

function sortProducts(products: Product[]): void {
	if (sortingSelector) {
		const sortingValue = sortingSelector.value;

		if (sortingValue === "price-up") {
			products.sort((a, b) => {
				if (a.price > b.price) {
					return 1;
				}
				if (a.price < b.price) {
					return -1;
				} else return 0;
			});
		}
		if (sortingValue === "price-down") {
			products.sort((a, b) => {
				if (a.price > b.price) {
					return -1;
				}
				if (a.price < b.price) {
					return 1;
				} else return 0;
			});
		}
	}
}

const inputElement = document.querySelector<HTMLInputElement>("#search-input");
console.log(inputElement);

if (inputElement) {
	inputElement.addEventListener("change", (event) => {
		event.preventDefault();
		const inputValue = inputElement.value;
		const filteredProductsByInput = products.filter((product) => {
			return (
				product.title.toLowerCase().includes(inputValue.toLowerCase()) ||
				product.description.toLowerCase().includes(inputValue.toLowerCase())
			);
		});

		renderProducts(filteredProductsByInput);
	});
}
