// Section 14 - Lesson 138
// Working with innerText and textContent

let ul = document.querySelector('ul');
// https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText
console.log(ul.innerText); // Just the text inside the ul

let h1 = document.querySelector('h1');
h1.innerText = 'Hello World'; // Changes the text inside the h1

ul.innerText = 'Good bye list items'
// Changing the text inside the ul will remove all the li elements.

let main = document.querySelector('#main');
console.log(main.innerText); // Shows only text inside paragraph.
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
console.log(main.textContent); // Shows all text content without html. 
