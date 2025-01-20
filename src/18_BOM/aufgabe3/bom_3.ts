// Bom-TS-Level-1_3
const button = document.querySelector<HTMLButtonElement>("#button-get-info");
const output = document.querySelector<HTMLDivElement>("#output-bom-elements");

if (button && output) {
	button.addEventListener("click", () => {
		const windowOutput = window.navigator.userAgent;
		const windowLanguages = window.navigator.languages;
		const browserName = window.navigator.appName;
		const appVersion = window.navigator.appVersion;
		const color = window.screen.colorDepth;
		const windowHeight = window.screen.availHeight;
		const windowWidth = window.screen.availWidth;
		const pixel = window.screen.pixelDepth;

		output.innerHTML = `Browserversion: ${windowOutput} <br/>
        Sprachen: ${windowLanguages} <br/>
        Browsername: ${browserName}<br/>
        Version: ${appVersion} <br/>
        color Depth: ${color} <br/>
        Höhe und Breite: ${windowHeight} & ${windowWidth} <br/>
        Pixel Depth: ${pixel}
        `;

		console.log("hallo");
	});
}
