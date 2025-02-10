import { WeatherType } from "./app";

const weatherPromise = new Promise((resolve, reject) => {
	const randomNumber = Math.floor(Math.random() * 10);
	if (randomNumber <= 6) {
		return resolve(WeatherType[randomNumber]);
	} else {
		reject("Weather forecast could not be determined");
	}
});

weatherPromise
	.then((result) => {
		console.log(result);
	})
	.catch((err) => {
		console.log(err);
	});
