// Looping over object keys.

const jobs = {
	'Black Mage'  : 'dps',
	'White Mage'  : 'green dps',
	Gunbreaker    : 'tank',
	Scholar       : 'healer',
	Machinist     : 'dps',
	'Dark Knight' : 'tank'
};

for (let job in jobs) {
	console.log(`${job} is ${jobs[job]}`);
}

for (let k in [ 1, 2, 3, 4 ]) {
	console.log(k); // Prints keys.
}
