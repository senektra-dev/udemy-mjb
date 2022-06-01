// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

function my_avg(numArr) {
	let sum = 0;
	for (let i = 0; i < numArr.length; i++) {
		sum += numArr[i];
	}
	return sum / numArr.length;
}

function sol_avg(numArr) {
	let sum = 0;
	for (let num of numArr) {
		sum += num;
	}
	return sum / numArr.length;
}

console.log(my_avg([ 0, 50 ]));
console.log(my_avg([ 75, 76, 80, 95, 100 ]));
