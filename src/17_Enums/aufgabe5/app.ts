import { Permission } from "./aufgabe5";

const permissionOutput = document.querySelector<HTMLDivElement>("#output");

function getPermission(param: Permission): string[] {
	const permissionsArray: string[] = [];
	for (let i = 0; i <= param; i++) {
		if (Permission[i]) {
			permissionsArray.push(Permission[i]);
		}
	}

	if (permissionOutput) {
		const newElement = document.createElement("p");
		permissionOutput.appendChild(newElement);
		newElement.className = "border-2 border-rose-400 rounded m-1 inline-block";
		newElement.textContent = `${permissionsArray}`;
	}
	console.log(permissionsArray);
	return permissionsArray;
}

getPermission(Permission.Read);
getPermission(4);
getPermission(2);
getPermission(8);
