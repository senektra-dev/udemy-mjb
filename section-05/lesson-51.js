let cars = [
    "bmw",
    "toyota",
    "mercedes",
    "subaru",
    "porsche",
];

// Reverse the array. Mutates original array.
cars.reverse();
console.log(`Reverse of cars: ${cars}`);

// Join array elements together, makes a string.
// Result may be controversial.
console.log(`cars after join: ${cars.join('>')}`);
