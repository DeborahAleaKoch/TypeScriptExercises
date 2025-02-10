//Utility-Types-TS-Level-1_2
//Erstelle dort einen neuen Type BasicBook basierend auf IBook

import { Book } from "../UtilityTypes-Level-1_1/book";

type BasicBook = Omit<Book, "publishingYear" | "shortDescription">;

//Lege eine Variable basicBook vom Typ BasicBook an und vergebe nur die nötigen Eigenschaften

const basicBook: BasicBook = {
	author: "sting",
	name: "string",
	numberOfPages: 100,
};

//Lege dann ein neues Interface IBasicBook basierend auf IBook an, bei dem ebenfalls publishingYear und shortDescription fehlen

interface IBasicBook
	extends Omit<Book, "publishingYear" | "shortDescription"> {}

const basicBook2: IBasicBook = {
	author: "string",
	name: "string",
	numberOfPages: 200,
};
