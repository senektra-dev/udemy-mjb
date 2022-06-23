// querySelector

// querySelector returns one element at most
const h1 = document.querySelector('h1');

console.log(h1);

const specialInput = document.querySelector('.special');

console.log(specialInput);

// querySelectorAll
// This returns a NodeList
const specialItems = document.querySelectorAll('ul li.special');

for (let item of specialItems) {
  console.log(item);
}


