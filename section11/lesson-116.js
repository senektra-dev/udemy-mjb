// Destructuring Objects.

// Destructuring Arrays.

const gura = {
	name    : 'Gura',
	unit    : 'EN',
	species : 'shark',
	height  : 'smol'
};

const { name: member, unit: hololive, ...other } = gura;

console.log(member);
console.log(hololive);
console.log(other);
