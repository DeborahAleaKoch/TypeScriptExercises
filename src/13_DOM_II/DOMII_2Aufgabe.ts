const button = document.querySelector<HTMLButtonElement>("#button");
const selsectMenu =
	document.querySelector<HTMLSelectElement>("#farbeAuswahlen");

if (button && selsectMenu) {
	button.addEventListener("click", function (event) {
		event.preventDefault;
		const selectIndex = selsectMenu.selectedIndex;
		console.log(selectIndex);
		selsectMenu.remove(selectIndex);
	});
}
