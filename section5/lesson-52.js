let animals = [
    "shark",
    "salmon",
    "whale",
    "bear",
    "lizard",
    "tortoise",
];

// Retrieve a portion from array.
let swimmers = animals.slice(0, 3);
console.log(swimmers);

// Slice from index to the end.
let lastThree = animals.slice(3);
console.log(lastThree);

// Same to the last example.
lastThree = animals.slice(-3);
console.log(lastThree);
