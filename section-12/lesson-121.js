// Adding methods to objects.

const add = function(x, y) {
	return x + y;
};

const math = {
	add,
	multiply : (x, y) => x * y
};

console.log(math.add(2, 3));
console.log(math.multiply(4, 5));
