// Spread in array literals.

const animal = [ 'wolf', 'fox', 'owl', 'shark' ];

const cars = [ 'toyota', 'chevrolet', 'subaru' ];

const randomArray = [ ...animal, ...cars ];
console.log(randomArray);

// Creates new copy. Does not work with deeply nest arrays.
const animalcopy = [ ...animal ];
