// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

function removeIndex(str, index) {
	return str.slice(0, index) + str.slice(index + 1);
}

// Complicated, but the algorithm works in place. Attempt was made using
// knowledge only known to us from previous lessons.
function isPangram(str) {
	let curr_index = 1;

	while (curr_index < str.length) {
		const curr_letter = str.toLowerCase()[curr_index];

		if (curr_letter === ' ') {
			str = removeIndex(str, curr_index);
			continue;
		}

		// Check if current letter is greater than lead letter.
		if (curr_letter > str.toLowerCase()[curr_index - 1]) {
			// We can move on.
			curr_index++;
		} else {
			// We must sort our lesser current letter at or before our lead letter.
			// First, remove letter from incorrect spot.
			str = removeIndex(str, curr_index);

			for (let s = curr_index - 1; s >= 0; s--) {
				const sort_letter = str.toLowerCase()[s];

				// Don't reinsert duplicates
				if (curr_letter === sort_letter) break;
				// Loop until the right position
				if (curr_letter < sort_letter && s !== 0) continue;

				// Time to insert
				insert_index = s > 0 ? s + 1 : s;
				str = str.slice(0, insert_index) + curr_letter + str.slice(insert_index);

				curr_index++;
				break;
			}
		}
	}

	return str.length === 26;
}

// I'm stupid.

function sol_isPangram(str) {
	let lowerCased = str.toLowerCase();
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (lowerCased.indexOf(char) === -1) {
			return false;
		}
	}

	return true;
}

console.log(isPangram('Hello world this is a random string'));
console.log(isPangram('The five boxing wizards jump quickly')); //true
console.log(isPangram('The five boxing wizards jump quick')); //false
console.log(isPangram('abcdfEghijklMnopqrsTuvwxyZ')); // true
console.log(isPangram('Zyxwvutsrqponmlkjihgefdcba')); // true
