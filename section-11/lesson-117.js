// Nested destructuring.

const members = [
	{
		name  : 'gura',
		datum : 'smol'
	},
	{
		name  : 'fauna',
		datum : 'censored'
	},
	{
		name  : 'mumei',
		datum : 'evil'
	}
];

const [ , { datum: funFact } ] = members;

console.log(funFact);
