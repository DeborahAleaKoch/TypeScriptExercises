import { add, substract, multiply, divide } from "./operations.ts";

console.log("add(2,4)", add(2, 4));
console.log("substract(10,4)", substract(10, 4));
console.log("multiply(2,4)", multiply(2, 4));
console.log("divide(12,4)", divide(12, 4));

import {
	addNumbers,
	substractNumbers,
	multiplyNumbers,
	divideNumbers,
} from "./operations2.ts";

console.log("addition:", addNumbers(10, 20));
console.log("subtraktion:", substractNumbers(100, 30));
console.log("multiplkation:", multiplyNumbers(20, 2));
console.log("division:", divideNumbers(100, 5));
