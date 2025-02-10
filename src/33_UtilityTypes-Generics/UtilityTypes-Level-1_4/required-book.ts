//Utility-Types-TS-Level-1_4

import { Book } from "../UtilityTypes-Level-1_1/book";
import { BookDescription } from "../UtilityTypes-Level-1_3/book-description";

//Erstelle dort einen neuen Type RequiredBook basierend auf IBook

type RequiredBook = Required<Book>;

//Alle Eigenschaften von IBook sind required ⇒ müssen angegeben werden
//Lege eine Variable requiredBook vom Typ BookDescription an und alle nötigen Eigenschaften

const requiredBook: RequiredBook = {
	name: "hier ist ein Name",
	shortDescription: " hier ist eine kurze Beschreibung",
	author: "dies Person hat das Geschrieben",
	numberOfPages: 333,
	publishingYear: "die erst auflage erschien im Jahr ....",
};

//Lege dann ein neues Interface IRequiredBook basierend auf IBook an ⇒ alle Eigenschaften sind auch hier Pflicht

interface IRequiredBook extends Required<Book> {}

//Lege eine Variable requiredBook2 vom Typ IRequiredBook an und vergebe alle nötigen Eigenschaften

const requiredBook2: IRequiredBook = {
	name: "hier ist ein Name",
	shortDescription: " hier ist eine kurze Beschreibung",
	author: "dies Person hat das Geschrieben",
	numberOfPages: 333,
	publishingYear: "die erst auflage erschien im Jahr ....",
};
