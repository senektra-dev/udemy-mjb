// New Rest syntax

function sumAll(...elems) {
	return elems.reduce((sum, curr) => sum + curr);
}

console.log(sumAll(1, 2, 3, 4));
