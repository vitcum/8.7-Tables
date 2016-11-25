var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = womensNames.concat(mensNames);

var newName = 'Marian';

if (allNames.indexOf(newName) == -1) {
	 allNames.push(newName);
} else {
	console.log('Takie imię już istnieje!')
}

console.log(allNames);