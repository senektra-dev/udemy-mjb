// The isPrime function here doesn't actually work.

const nums = [];
for (i = 0; i < 150; i++) {
	nums.push(i);
}

function isPrime(num) {
	for (div of [ 2, 3, 5, 7 ]) {
		if ((num !== div && num % div === 0) || num === 1) {
			return false;
		}
	}
	return true;
}

const primes = nums.filter(isPrime);

console.log(primes);
