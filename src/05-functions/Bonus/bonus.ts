const homeBtn1 = document.querySelector<HTMLButtonElement>("#btn-home-1");
const homeBtn2 = document.querySelector<HTMLButtonElement>("#btn-home-2");
const homeBtn3 = document.querySelector<HTMLButtonElement>("#btn-home-3");

const awayBtn1 = document.querySelector<HTMLButtonElement>("#btn-away-1");
const awayBtn2 = document.querySelector<HTMLButtonElement>("#btn-away-2");
const awayBtn3 = document.querySelector<HTMLButtonElement>("#btn-away-3");

const resetBtn = document.querySelector<HTMLButtonElement>("#reset");

let defaultHomeScore: number = 0;
let defaultAwayScore: number = 0;

const resultHome = document.querySelector<HTMLParagraphElement>("#output-home");
const resultAway = document.querySelector<HTMLParagraphElement>("#output-away");

function homeScore(add: number) {
	defaultHomeScore = defaultHomeScore + add;
	if (resultHome !== null) {
		resultHome.innerHTML = `${defaultHomeScore}`;
	} else {
	}
}
if (homeBtn1 !== null) {
	homeBtn1.onclick = () => homeScore(1);
}

if (homeBtn2 !== null) {
	homeBtn2.onclick = () => homeScore(2);
}
if (homeBtn3 !== null) {
	homeBtn3.onclick = () => homeScore(3);
}

function awayScore(add: number) {
	defaultAwayScore = defaultAwayScore + add;
	if (resultAway !== null) {
		resultAway.innerHTML = `${defaultAwayScore}`;
	} else {
	}
}
if (awayBtn1 !== null) {
	awayBtn1.onclick = () => awayScore(1);
}

if (awayBtn2 !== null) {
	awayBtn2.onclick = () => awayScore(2);
}
if (awayBtn3 !== null) {
	awayBtn3.onclick = () => awayScore(3);
}

function resetSorce() {
	if (defaultHomeScore !== null) {
	} else {
		console.log("huppili, hier ist was schief gelaufen :/");
	}
}
