// Default params for functions.

// You can set params to default values
function multiply(a, b = 1) {
	return a * b;
}

function greet(person, greeting = 'hi') {
	console.log(`${greeting}, ${person}!`);
}

console.log(multiply(5)); // 5
console.log(greet('marry'));
