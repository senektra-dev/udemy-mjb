let dishesToDo = ["big platter"]

// Add element to the beginning of array.
dishesToDo.unshift("large plate");
dishesToDo.unshift("mug");
console.log(`After unshift: ${dishesToDo}`);

// Remove element from beginning of array.
console.log(`Element removed with shift(): ${dishesToDo.shift()}`);
console.log(`dishesToDo after shift(): ${dishesToDo}`);

// Add multiple elements to beginning of array.
//
// This will add the elements as a "chunk", rather than one by one.
console.log(`Elements total in list: ${dishesToDo.unshift("I'll be first in list", "and I'll be second")}`);
console.log(`Elements in list after unshift(): ${dishesToDo}`);

// The same can be done with the .push() function.
// Order preservation behaves the same as well.
