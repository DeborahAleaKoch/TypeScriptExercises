// erstellen der funktionen die Exportiert werden sollen

// 1. Funktion add numA + numB

export function add(numA: number, numB: number): number {
	return numA + numB;
}

export function substract(numA: number, numB: number): number {
	if (numA > numB) {
        // positive zahlen kommen heraus
		return numA - numB;
	} else {
		return numB - numA;
	}
}

export function multiply(numA: number, numB: number): number {
	return numA * numB;
}

export function divide(numA: number, numB: number): number {
	return numA / numB;
}

