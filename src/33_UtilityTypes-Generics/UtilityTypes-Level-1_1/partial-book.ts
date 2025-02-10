//Erstelle dort einen neuen Type PartialBook basierend auf IBook

import { Book } from "./book";

type PartialBook = Partial<Book>;

//Lege eine Variable partialBook vom Typ PartialBook an und vergebe nur die Eigenschaften author und name

const partialBook: PartialBook = { author: "string", name: "string" };

//Lege dann ein neues Interface IPartialBook basierend auf IBook an
interface IPartialBook extends Partial<Book> {}

//Lege eine Variable partialBook2 vom Typ IPartialBook an und vergeben nur die Eigenschaft name
const partialBook2: IPartialBook = { name: "string" };
