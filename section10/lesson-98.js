// Map

const divisors = [ 2, 3, 5, 7 ];
const numbers = [
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
	21,
	22,
	23,
	24,
	25,
	26,
	27,
	28,
	29
];

const cars = [
	{
		year  : '2008',
		make  : 'volkswagen',
		model : 'rabbit'
	},
	{
		year  : '2014',
		make  : 'toyota',
		model : 'tacoma'
	},
	{
		year  : '2022',
		make  : 'porsche',
		model : '911 GT3'
	}
];

const numData = numbers.map(function(num) {
	const mvalue = {
		value   : num,
		isPrime : true
	};

	for (let div of divisors) {
		if (num % div == 0 && num !== div) {
			mvalue.isPrime = false;
			break;
		}
	}

	return mvalue;
});

for (let data of numData) {
	console.log(data);
}

const models = cars.map((car) => car.model.toLowerCase());

console.log(models);
