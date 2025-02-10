//Utility-Types-TS-Level-1_3

import { Book } from "../UtilityTypes-Level-1_1/book";

//Lege eine neue Datei book-description.ts an
//Erstelle dort einen neuen Type BookDescription basierend auf IBook

export type BookDescription = Omit<
	Book,
	"author" | "numberOfPages" | "publishingYear"
>;

//Lege eine Variable bookDescription vom Typ BookDescription an und vergebe nur die nötigen Eigenschaften

const bookDescription: BookDescription = {
	name: "String",
	shortDescription: "hier steht irgendein Text - Toll",
};

//Lege dann ein neues Interface IBookDescription basierend auf IBook an - ebenfalls name und shortDescription von IBook übernehmen

interface IBookDescription
	extends Omit<Book, "author" | "numberOfPages" | "publishingYear"> {}

//Lege eine Variable bookDescription2 vom Typ IBookDescription an und vergebe nur die nötigen Eigenschaften
const bookDescription2: IBookDescription = {
	name: "string",
	shortDescription: "hier steht irgendein Text - Toll",
};
