// More Reduce

const votes = [ 'y', 'y', 'n', 'n', 'y', 'n', 'n', 'y', 'y', 'y' ];

/*
const results = votes.reduce(
	(tally, val) => {
		tally[val]++;
		return tally;
	},
	{ y: 0, n: 0 }
);
*/

// this version let's us dynamically count new elements.
const results = votes.reduce((tally, val) => {
	tally[val] = (tally[val] || 0) + 1;
	return tally;
}, {});

console.log(results);
