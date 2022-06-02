// Functions as Return Values.

function multiplyBy(num) {
	return (x) => x * num;
}

const multiplyBy5 = multiplyBy(5);

console.log(multiplyBy5(3)); // 15
