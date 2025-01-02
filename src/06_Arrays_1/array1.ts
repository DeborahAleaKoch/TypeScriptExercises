// Array-TS-Level-1_1
console.log("Array-TS-Level-1_1");

const bucketList: string[] = ["Japan", "South Korea", "Finnland"];

const luckyNumbers: number[] = [21, 13, 17];

const favoritePeople: string[] = ["Janek", "Nathalie", "Dennis"];

console.log(bucketList);
console.log(luckyNumbers);
console.log(favoritePeople);

console.log("_________________");
// Array-TS-Level-1_2
console.log("Array-TS-Level-1_2");

console.log(bucketList[0]);
console.log(bucketList[1]);
console.log(bucketList[2]);

console.log(luckyNumbers[0]);
console.log(luckyNumbers[1]);
console.log(luckyNumbers[2]);

console.log(favoritePeople[0]);
console.log(favoritePeople[1]);
console.log(favoritePeople[2]);

console.log("________________");
// Array-TS-Level-1_3 (length)
console.log("Array-TS-Level-1_3 (length)");

console.log(bucketList.length);
console.log(luckyNumbers.length);
console.log(favoritePeople.length);

console.log("________________");
// Array-TS-Level-1_4 (push)
console.log("Array-TS-Level-1_4 (push)");

bucketList.push("Canada", "Neuseeland", "Aserbaidschan");
console.log(bucketList);

console.log("________________");
// Array-TS-Level-1_5 (pop)
console.log("Array-TS-Level-1_5 (pop)");

console.log(bucketList);

const bucketListPop: string | undefined = bucketList.pop();
console.log(bucketListPop);

console.log(luckyNumbers);
const luckyNumbersPop = luckyNumbers.pop();
console.log(luckyNumbersPop);

console.log(favoritePeople);
// const favoritePeoplePop = favoritePeople.pop();
// console.log(favoritePeoplePop);

console.log("________________");
// Array-TS-Level-1_6 (shift)
console.log("Array-TS-Level-1_6 (shift)");

console.log(favoritePeople);
const favoritePeopleShift: string | undefined = favoritePeople.shift();
console.log(favoritePeople);
console.log(favoritePeopleShift);

console.log("_________________");
// Array-TS-Level-1_7 (unshift)
console.log("Array-TS-Level-1_7 (unshift)");

console.log(bucketList);
bucketList.unshift("Aserbaidschan", "Iceland");
console.log(bucketList);

console.log("_________________");
// Array-TS-Level-1_8 (slice)
console.log("Array-TS-Level-1_8 (slice)");

const lieblingsreiseziele: string[] = [
	"Japan",
	"South Korea",
	"Finnland",
	"Russland",
	"Sudan",
	"Canada",
	"Neuseeland",
	"Aserbaidschan",
];

console.log(lieblingsreiseziele);
const lieblingsreisezieleSlice: string[] = lieblingsreiseziele.slice(3, 5);
console.log(lieblingsreisezieleSlice);
console.log(lieblingsreiseziele);

console.log("_________________");
// Array-TS-Level-1_9 (push/pop shift/unshift)
console.log("Array-TS-Level-1_9 (push/pop shift/unshift)");

const numberArray: number[] = [23, 54, 75];
console.log(numberArray);
numberArray.push(12, 22, 50, 69, 2);
console.log(numberArray);
numberArray.unshift(13, 27, 66, 101, 4);
console.log(numberArray);
numberArray.pop();
numberArray.pop();
console.log(numberArray);
numberArray.shift();
numberArray.shift();
console.log(numberArray);

console.log("_________________");
// Array-TS-Level-1_14 (copy)
console.log("Array-TS-Level-1_14 (copy)");

const oldHollywoodActors: string[] = [
	"Marlon Brando",
	"Audrey Hepburn",
	"Elizabeth Taylor",
	"Cary Grant",
	"Paul Newman",
	"Doris Day",
];
console.log(oldHollywoodActors);

const actorsReference = oldHollywoodActors;
console.log(actorsReference);
actorsReference.push("Marilyn Monroe");
console.log(actorsReference);
console.log("----");

const oldHollywoodActorsCopy = oldHollywoodActors.slice();
console.log(oldHollywoodActorsCopy);

console.log("----");
const oldHollywoodActorsCopy1 = oldHollywoodActors.concat();
console.log(oldHollywoodActorsCopy1);

console.log("----");
actorsReference.shift();
console.log(actorsReference);

console.log("----");

const oldHollywoodActorsCopySlice = oldHollywoodActorsCopy.slice(3, 4);
console.log(oldHollywoodActorsCopySlice);
console.log("----");

const oldHollywoodActorsCopy1Pop = oldHollywoodActorsCopy1.pop();
console.log(oldHollywoodActorsCopy1Pop);
console.log(oldHollywoodActorsCopy1);
