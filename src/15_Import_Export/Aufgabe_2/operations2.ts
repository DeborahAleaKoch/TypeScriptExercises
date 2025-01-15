// Exportiere diese Funktionen am Dateiende mit den neuen Namen:
// addNumbers, subtractNumbers, multiplyNumbers und divideNumbers

function add(numA: number, numB: number): number {
	return numA + numB;
}

function substract(numA: number, numB: number): number {
	if (numA > numB) {
		// positive zahlen kommen heraus
		return numA - numB;
	} else {
		return numB - numA;
	}
}

function multiply(numA: number, numB: number): number {
	return numA * numB;
}

function divide(numA: number, numB: number): number {
	return numA / numB;
}

export {
	add as addNumbers,
	substract as substractNumbers,
	multiply as multiplyNumbers,
	divide as divideNumbers,
};
