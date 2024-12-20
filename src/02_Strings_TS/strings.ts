// String-Methods-TS-Level-1_1

const firstName: string = "Deborah";
const lastName: string = "Koch";

console.log(firstName.length);
console.log(lastName.length);
console.log(firstName.concat(lastName).length);

console.log("_____");
// String-Methods-TS-Level-1_2

const earthQuote: string =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log(earthQuote.indexOf("h"));
console.log(earthQuote.indexOf("Earth"));
console.log(earthQuote.indexOf("Moon"));

console.log("_____");

// String-Methods-TS-Level-1_4

const susisStatus: string = "Susi is going to codingschool";

const firstWord: string = susisStatus.slice(0, 4);
const secondWord: string = susisStatus.slice(5, 7);
const threeWord: string = susisStatus.slice(8, 17);
const fouthWord: string = susisStatus.slice(23);
const fithWord: string = susisStatus.slice(0, 8);

console.log(firstWord);
console.log(secondWord);
console.log(threeWord);
console.log(fouthWord);
console.log(fithWord);

const level1_4 = document.getElementById("1_4");

if (level1_4 !== null) {
  level1_4.innerHTML += `<p>${firstWord}</p>`;
  level1_4.innerHTML += `<p>${secondWord}</p>`;
  level1_4.innerHTML += `<p>${threeWord}${fouthWord}</p>`;
  level1_4.innerHTML += `<p>${fouthWord}</p>`;
  level1_4.innerHTML += `<p>${fithWord}${fouthWord}</p>`;
}

console.log("_____");

// String-Methods-TS-Level-1_5

const whereIsSusi: string = "Susi is back from codingschool";

const susi: string = whereIsSusi.substring(0, 5);
const is: string = whereIsSusi.substring(5, 8);
const school: string = whereIsSusi.substring(24);

const level1_5 = document.getElementById("1_5");
if (level1_5 !== null) {
  level1_5.innerHTML += `<p>${susi}</p>`;
  level1_5.innerHTML += `<p>${is}</p>`;
  level1_5.innerHTML += `<p>${school}</p>`;
  level1_5.innerHTML += `<p>${susi}${is}${school}</p>`;
}
console.log(susi);
console.log(is);
console.log(school);

// Auskommentiert, weil unschön im Browser. Funktioniert aber.
// document.open();
// document.write(`<p>${susi}</p>`);
// document.write(`<p>${is}</p>`);
// document.write(`<p>${school}</p>`);
// document.write(`<p>${susi}${is}${school}</p>`);
// document.close();

console.log("_____");
// String-Methods-TS-Level-1_7

const samsStatus: string = "Sam is good at codingschool";

const badSam: string = samsStatus.replace("good", "bad");
const susiSam: string = samsStatus.replace("Sam", "Susi");
const tennisSchool: string = samsStatus.replace("codingschool", "tennis");
const codingSchool: string = samsStatus.replace("codingschool", "school");

console.log(badSam);
console.log(susiSam);
console.log(tennisSchool);

const level1_7 = document.getElementById("1_7");
if (level1_7 !== null) {
  level1_7.innerHTML += `<p>${badSam} </p>`;
}

console.log("_____");
// String-Methods-TS-Level-1_9

const infoAboutSam = "Sam is going to codingschool";
const susi1 = "Susi";
const and = "and";

const firstText = infoAboutSam
  .concat(" ", and, " to the movie theater")
  .replace("codingschool", "school");
console.log(firstText);

const secondText: string = infoAboutSam
  .slice(0, 12)
  .concat(" to the movie theater")
  .replace("codingschool", "school");
console.log(secondText);

const thirdText: string = susi1.concat(
  ` `,
  and,
  ` ${infoAboutSam.slice(0, 12)}`,
  " to school"
);
console.log(thirdText);

const fourthText: string = thirdText
  .replace("school", "gym")
  .concat(` `, and, ` to the movie theater`);
console.log(fourthText);

const fithText: string = firstText.replace("Sam", "Susi");
console.log(fithText);

const level1_9 = document.getElementById("1_9");
if (level1_9 !== null) {
  level1_9.innerHTML += `<p>${firstText} </p>`;
  level1_9.innerHTML += `<p>${secondText} </p>`;
  level1_9.innerHTML += `<p>${thirdText} </p>`;
  level1_9.innerHTML += `<p>${fourthText} </p>`;
  level1_9.innerHTML += `<p>${fithText} </p>`;
}

console.log("_____");

// String-Methods-TS-Level-1_8

const whereIsSam = "Sam is going to school";

console.log(whereIsSam.toLocaleUpperCase());
console.log(whereIsSam.toLocaleLowerCase());

const upperSam = whereIsSam.slice(0, 3).toLocaleUpperCase();
const upperGoing: string = whereIsSam.slice(3, 13).toUpperCase();
const upperSchool: string = whereIsSam.slice(16).toUpperCase();
const fristLetter: string = whereIsSam.toUpperCase();

console.log(
  whereIsSam.slice(0, 3).toLocaleUpperCase(),
  whereIsSam.slice(-18, -6),
  whereIsSam.slice(16).toUpperCase()
);

console.log(upperGoing);
const level1_8 = document.getElementById("1_8");
if (level1_8 !== null) {
  level1_8.innerHTML += `<p>${whereIsSam.toLocaleUpperCase()}</p>`;
  level1_8.innerHTML += `<p>${whereIsSam.toLocaleLowerCase()}</p>`;
  level1_8.innerHTML += `<p>${upperSam} ${whereIsSam.slice(
    -18,
    -6
  )} ${upperSchool}</p>`;
  level1_8.innerHTML += `<p>${whereIsSam.slice(0, 3)} ${whereIsSam
    .slice(-18, -6)
    .toUpperCase()} ${upperSchool.toLowerCase()}</p>`;
}

console.log("_____");
// Number-Methods-TS-Level-1_3

let number1: number = 15.16698;
let number2: number = 7.78714;
let number3: string = "12.3";
let number4: string = "3.14";
let number5: string = "32";

let a: number = Number(number1.toString());
let b: number = Number(number1.toString(2));
let c: number = Number(number1.toString(8));
let d: number = Number(number1.toString(16));
console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log(Number(number2).toString());
console.log(Number(number2).toString(2));
console.log(Number(number2).toString(8));
console.log(Number(number2).toString(16));

console.log(Number(number3).toString());
console.log(Number(number3).toString(2));
console.log(Number(number3).toString(8));
console.log(Number(number3).toString(16));

console.log("_____");
// Number-Methods-TS-Level-1_2

console.log(number1.toFixed(2));
console.log(number2.toFixed(2));
console.log(Number(number3).toFixed(2));
console.log(Number(number4).toFixed(2));
console.log(Number(number5).toFixed(2));
