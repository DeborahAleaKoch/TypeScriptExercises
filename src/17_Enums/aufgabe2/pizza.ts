// Enum-TS-Level-1_2
// Definiere Pizza Enum

enum PizzaSize {
	small,
	medium,
	large,
	family,
}

enum PizzaIngedients {
	Cheese,
	Onion,
	Ananas,
	Corn,
	Spniach,
	Olives,
}

type Pizza = {
	size: PizzaSize;
	ingredients: PizzaIngedients[];
};

const pizzaHawaii: Pizza = {
	size: PizzaSize.medium,
	ingredients: [PizzaIngedients.Ananas, PizzaIngedients.Corn],
};
const pizzaOnion: Pizza = {
	size: PizzaSize.family,
	ingredients: [
		PizzaIngedients.Cheese,
		PizzaIngedients.Olives,
		PizzaIngedients.Onion,
	],
};
const pizzaSpinach: Pizza = {
	size: PizzaSize.large,
	ingredients: [PizzaIngedients.Spniach, PizzaIngedients.Cheese],
};
const pizzaOlivo: Pizza = {
	size: PizzaSize.medium,
	ingredients: [PizzaIngedients.Olives, PizzaIngedients.Cheese],
};

// console.log({ pizzaHawaii }, { pizzaOlivo }, { pizzaOnion }, { pizzaSpinach });
