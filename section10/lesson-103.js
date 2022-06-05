// Some & Every

const words = [ 'dog', 'dig', 'log', 'bag', 'wag' ];

// Every returns true if every element meets criteria.
console.log(words.every((word) => word.length === 3));

// Some returns true as long as some elements meet criteria.
console.log(words.some((word) => word[0] === 'd'));
