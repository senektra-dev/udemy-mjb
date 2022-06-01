// Creating a roll die function.

function rollDie() {
	return Math.floor(Math.random() * 6) + 1;
}

for (let i = 0; i < 5; i++) {
	console.log(rollDie());
}

function throwDice() {
	return [ rollDie(), rollDie() ];
}

console.log(throwDice());
