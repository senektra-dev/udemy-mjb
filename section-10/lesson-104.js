// Sort

const prices = [ 9, 100, 4000, 10.5, 0.99 ];

// Let x be the result of compareFunc(a, b)
// if x < 0: sort a before b
// if x == 0: do change sorting
// if x > 0: sort b before a
console.log(prices.sort((a, b) => a - b));
