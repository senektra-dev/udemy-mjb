// The arguments object

function sum() {
	console.log(arguments);
	const args = [ ...arguments ];
	return args.reduce((sum, curr) => sum + curr);
}

console.log(sum(1, 2, 4, 5));
