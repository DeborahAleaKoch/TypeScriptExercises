//fetch-level-1_2

type User = {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
};

fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
	.then((response) => {
		return response.json();
	})
	.then((entry: User[]) => {
		renderUsers(entry);
		console.log();
	})
	.catch((error) => {
		console.log(error);
	});
//function um nur an die Emails zu kommen
function renderUsers(users: User[]) {
	users.forEach((user) => {
		console.log(user.email);
	});
}

// Hole in einem neuen fetch alle Posts ab https://jsonplaceholder.typicode.com/posts
//und verarbeite sie weiter

type Posts = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

fetch("https://jsonplaceholder.typicode.com/posts")
	.then((response) => {
		return response.json();
	})
	.then((data: Posts[]) => {
		//alle Daten werden in der Console ausgegeben
		console.log(data);
		//finde die höchste Post-Id und gib sie auf der Konsole aus
		const userIds = data.map((user) => {
			return user.id;
		});
		console.log(Math.max(...userIds));

		//finde den kürzesten Titel gib ihn auf der Konsole aus
		//ausgabe oder heraus 'filtern' der title
		const titles = data.map((user) => {
			return user.title;
		});
		//die titel werden nach ihrer länge sortiert
		const sortedTitle = titles.sort((a, b) => {
			return a.length - b.length;
		});
		// es wird der erste Titel in dem array in der Console ausgegeben
		console.log(sortedTitle[0]);

		//finde den längsten Body und gib ihn auf der Konsole aus
		//es wird nur jeweils der eintrag für den body ausgegeben
		const bodies = data.map((user) => {
			//ausgabe in der console von allen body einträgen
			// console.log(user.body);
			return user.body;
		});
		const sortedBodies = bodies.sort((a, b) => {
			return b.length - a.length;
		});
		//hier werden alle body einträge in der console ausgegeben
		// console.log(sortedBodies);
		//Ausgabe des kürzesten Bodies
		console.log(sortedBodies[0]);
	})
	.catch((error) => {
		console.warn(error);
	});
