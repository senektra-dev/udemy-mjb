// Looping over object keys.

const movieReviews = {
	Arrival     : 9.5,
	Alien       : 9,
	Amelie      : 8,
	'In Bruges' : 9,
	Amadeus     : 10,
	'Kill Bill' : 8
};

// Does not work.
// for (let movie of movieReviews) {
// 	console.log(movie);
// }

for (let movie of Object.keys(movieReviews)) {
	console.log(movie, movieReviews[movie]);
}

// Isolate values.
const ratings = Object.values(movieReviews);

let total = 0;
for (let rating of ratings) {
	total += rating;
}

let avg = total / ratings.length;
console.log(avg);
