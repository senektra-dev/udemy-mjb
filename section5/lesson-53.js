let animals = [
    "shark",
    "salmon",
    "whale",
    "bear",
    "lizard",
    "tortoise",
];

// Add element after shark.
animals.splice(1, 0, "octopus");
console.log(animals);

// Remove two items at index (at whale).
animals.splice(3, 2);
console.log(animals);

// Insert two items at index.
animals.splice(-1, 0, "whale", "bear");
console.log(animals);

// Replace first two items with different elements.
animals.splice(0, 2, "Fox", "Dragon");
console.log(animals);
