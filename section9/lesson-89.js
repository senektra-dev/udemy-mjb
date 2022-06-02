// Lexical Scope

function outer() {
	let movie = 'Amadeus';

	function inner() {
		console.log(movie.toUpperCase());
	}

	inner();
}

outer();
