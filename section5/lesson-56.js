// You reassign elements to a const array, but you cannot change
// the array assignment itself.
const myArray = [1, 2, 3, 4];
myArray.push(5);
myArray[1] = 0;
console.log(myArray);

// Can't do this
// myArray = [1, 2, 3, 4];