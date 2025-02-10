//Utility-Types-TS-Level-1_5
//Lege eine neue Datei an readonly-book.ts an

import { Book } from "../UtilityTypes-Level-1_1/book";

//Erstelle dort einen neuen Type ReadOnlyBook basierend auf IBook

type ReadOnlyBook = Readonly<Book>;

//Alle Eigenschaften von IBook sind readonly ⇒ schreibgeschützt
//Lege eine Variable readonlyBook vom Typ ReadOnlyBook an und vergeben alle nötigen Eigenschaften und Werte
const requiredBook: ReadOnlyBook = {
	name: "hier ist ein Name",
	shortDescription: " hier ist eine kurze Beschreibung",
	author: "dies Person hat das Geschrieben",
	numberOfPages: 333,
	publishingYear: "die erst auflage erschien im Jahr ....",

	//Versuche nachträglich Werte zu setzen
	// date:45 ->> fehler
};

//Lege dann ein neues Interface IReadOnlyBook basierend auf IBook an ⇒ alle Eigenschaften sind auch hier schreibgeschützt

interface IReadOnlyBook extends Readonly<Book> {}

//Lege eine Variable readonlyBook2 vom Typ IReadOnlyBook an und vergebe alle nötigen Eigenschaften und Werte

const readonlyBook2: IReadOnlyBook = {
	name: "hier ist ein Name",
	shortDescription: " hier ist eine kurze Beschreibung",
	author: "dies Person hat das Geschrieben",
	numberOfPages: 333,
	publishingYear: "die erst auflage erschien im Jahr ....",

	//Versuche nachträglich Werte zu setzen
	// date:1999 //fehler
};
