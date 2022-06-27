// Section 14 - Lesson 138
// Working with innerText and textContent

const ul = document.querySelector('ul');
// https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText
console.log(ul.innerText); // Just the text inside the ul

const h1 = document.querySelector('h1');
h1.innerText = 'Hello World'; // Changes the text inside the h1

ul.innerText = 'Good bye list items'
// Changing the text inside the ul will remove all the li elements.

const main = document.querySelector('#main');
console.log(main.innerText); // Shows only text inside paragraph.
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
console.log(main.textContent); // Shows all text content without html. 
