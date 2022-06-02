// Higher Order Functions.
// Functions that operate on/with other functions. They can:
// - Accept other functions as arguments.
// - Return a function.

function multiply(a, b) {
	return a * b;
}

function add(a, b) {
	return a + b;
}

function divide(a, b) {
	return a / b;
}

function subtract(a, b) {
	return a - b;
}

ops = [ add, subtract, multiply, divide ];

for (let operation of ops) {
	console.log(operation(2, 4));
}
