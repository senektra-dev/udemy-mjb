// Section 14 - Lesson 144
// Altering Styles

let h1 = document.querySelector('h1');
// Will be undefined if there is no inline style defined for the h1 element.
// https://developer.mozilla.org/en-US/docs/Web/API/Element/style
console.log(h1.style.color);

// Set the color of the h1 element to red.
h1.style.color = 'red';

// Select the first p element
let p = document.querySelector('p');
// Set the background color of p to #f4f4f4.
p.style.backgroundColor = '#f4f4f4';


// Select all lis
let lis = document.querySelectorAll('li');

// Random array of colors
let colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];

// Set a random color for each li element.
lis.forEach((li, index) => {
  li.style.color = colors[Math.floor(Math.random() * colors.length) + 1];
});
