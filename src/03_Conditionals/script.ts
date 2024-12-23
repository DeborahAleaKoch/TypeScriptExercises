console.log("Conditionals Level 2_1");

const johnSize = 170;
const johnAge = 22;

const maikeSize = 168;
const maikeAge = 34;

// function score(age, size){
//     const result = (age * 5) + size;

//     console.log(result);
// }

// score(johnAge, johnSize);
// score(maikeAge, maikeSize)

function highscore() {
  const resultJohn: number = johnAge * 5 + johnSize;
  const resultMaike: number = maikeAge * 5 + maikeSize;

  console.log("john Score: ", resultJohn);
  console.log("Maike Score: ", resultMaike);

  if (resultJohn < resultMaike) {
    console.log(`Maike gewinnt mit ${resultMaike} Punkten`);
  } else {
    console.log(`John gewinnt mit ${resultJohn}`);
  }
}

highscore();

console.log("__________________________");

// Conditionals-TS-Level-2_3 (if/else)
console.log("Conditionals-TS-Level-2_3 (if/else)");

function diff(value: number) {
  const result: number = value - 27;

  if (result > 27) {
    const newResult = result * 2;
    console.log(`Das neue Ergebnis lautet ${newResult}`);
  } else {
    console.log(`Das Ursprüngliche Ergebnis (${result}) ist kleiner als 27`);
  }
}

diff(35);
diff(74);
diff(123);

console.log("__________________________");
// Conditionals-TS-Level-1_4 (Ternary Operator)
console.log("Conditionals-TS-Level-1_4 (Ternary Operator)");
// Passwort soll mindestent 8 Zeichen lang sein
const button = document.querySelector("#password-btn") as HTMLButtonElement;
const inputValuePw = document.querySelector("#password") as HTMLInputElement;
const resultBlock = document.querySelector("#result_1") as HTMLSpanElement;

function passwordCheck() {
  const check =
    inputValuePw.value.length < 8
      ? "The Password is to short!"
      : "Welcome to your Account!";

  resultBlock.innerText = check;
}

button.onclick = passwordCheck;

console.log("__________________________");
// Ternary-Operator-TS-Level-2_2
console.log("Ternary-Operator-TS-Level-2_2");

const isOnline: boolean = Math.random() > 0.5;
const isPremiumUser = Math.random() > 0.5;
const isAdult = Math.random() > 0.5;

// const isOnline = !!Math.random();

console.log(isOnline);

function trueOrFalse() {
  const resultIsOnline = isOnline == true ? "online" : "offline";
  const monthlyFee: number = isPremiumUser == true ? 19.99 : 12.99;
  const resultAdult =
    // isAdult == true
    //   ? window.confirm("Willkommen")
    //   : window.alert("Keine Berechtigung");

    console.log(resultIsOnline);
  console.log(monthlyFee);
  //   console.log(resultAdult);
}
trueOrFalse();

// Random Zahlen
const randomAge = Math.floor(Math.random() * 121);
const randomSalary = Math.floor(Math.random() * 15001);

console.log(randomAge);
console.log(randomSalary);

// Random Age

const isMiddleAge = randomAge >= 40 && randomAge <= 65 ? "middleAge" : "false";

console.log(isMiddleAge);

const salary =
  randomSalary > 10000
    ? "You are rich"
    : randomSalary > 1500
    ? "Not too bad"
    : "not that much";
console.log(salary);

console.log("__________________________");
// Conditionals-TS-Level-2_4 (if/else, switch)
console.log("Conditionals-TS-Level-2_4 (if/else, switch)");

const randomNumber1: number = Math.floor(Math.random() * 78);
const randomNumber2: number = Math.floor(Math.random() * 78);

function comparison() {
  if (randomNumber1 === randomNumber2) {
    console.log("was ein zufall");
  } else if (randomNumber1 > randomNumber2) {
    console.log("erste zahl ist größer");
  } else if (randomNumber2 > randomNumber1) {
    console.log("zweite zahl ist größer");
  }
}

comparison();
