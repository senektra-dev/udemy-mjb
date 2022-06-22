// Spreading in object literals.

const feline = {
	legs   : 4,
	family : 'Feliade'
};

const canine = {
	family : 'Caninae',
	furry  : true
};

const dog = {
	...canine,
	isPet    : true,
	adorable : true
};

const houseCat = {
	...feline,
	isGrumpy : true
};

const catDog = {
	...canine,
	...feline
};

const tripod = {
	...canine,
	legs : 3
};

console.log(dog);
console.log(houseCat);
console.log(catDog);
console.log(tripod);

console.log({ ...[ 1, 2, 3, 4, 5 ] });
