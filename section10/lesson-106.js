// Reduce Pt. 2

const grades = [ 87, 64, 96, 88, 99, 73, 70, 64 ];

const maxGrade = grades.reduce((max, currVal) => Math.max(max, currVal));
console.log(maxGrade);

const sumWithStartingSum = grades.reduce((sum, curr) => sum + curr, 100);
console.log(sumWithStartingSum);
