//fetch-level-2_2

//Nutze die JSON-Placeholder API und hole dort mit fetch alle Aufgaben unter https://jsonplaceholder.typicode.com/todos ab

const outputSection = document.querySelector("#aufgaben-output");

type Task = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

fetch("https://jsonplaceholder.typicode.com/todos")
	.then((response) => {
		console.log(response);
		return response.json();
	})
	.then((data: Task[]) => {
		//die aufgaben werden ausgegeben imhtml

		const sortedTitle = data.sort((a, b) => {
			if (a.title < b.title) {
				return -1;
			}
			if (a.title > b.title) {
				return 1;
			}
			return 0;
		});

		renderTask(sortedTitle);
		console.log(sortedTitle);
		//kurzschreibweise: data.sort((a,b)=>a.title > b.title ? 1 : -1))
	})
	.catch((error) => {
		console.error(error);
	});

function renderTask(entry: Task[]) {
	entry.forEach((element) => {
		const color = element.completed ? "bg-green-500" : "bg-red-500";
		if (outputSection) {
			outputSection.innerHTML += `<div class='shadow-md p-2 ${color}'>
            <p>${element.title}</p>
            <p></p>
            </div>`;
		}
	});
}
