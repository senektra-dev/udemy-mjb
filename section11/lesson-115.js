// Destructuring Arrays.

const names = [ 'gura', 'mumei', 'fauna', 'calliope', 'baelz', 'kronii', 'irys' ];

const [ gura, mumei, , calliope, ...hololive ] = names;

console.log(gura);
console.log(mumei);
console.log(calliope);
console.log(hololive);
