let array1 = [1, 2];
let array2 = [3, 4];
let array3 = [5, 6];

// Add array2 to the end of array1.
let new_array1 = array1.concat(array2);
console.log(new_array1);

// Add array2 and array3 to the end of array1.
let new_array2 = array1.concat(array2, array3);
console.log(new_array2);
