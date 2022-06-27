// Section 14 - Lesson 148
// Append, Prepend, & insertBefore

// We can use the appendChild() method to add a new node to the end of the list.
// We can use the prependChild() method to add a new node to the beginning of the list.
// We can use the insertBefore() method to add a new node before a specific node.

const ul = document.querySelector('ul');

// Create a new li
const newLi = document.createElement('li');
newLi.innerText = 'New Todo';

// Append the new li to the ul
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
ul.append(newLi);

// Create a new li
const newLi2 = document.createElement('li');
newLi2.innerText = 'New Todo 2';

// Prepend the new li to the ul
// https://developer.mozilla.org/en-US/docs/Web/API/Node/prepend
ul.prepend(newLi2);

// Create a new li
const newLi3 = document.createElement('li');
newLi3.innerText = 'New Todo 3';
// Insert the new li before the third li
// https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
ul.insertBefore(newLi3, ul.children[2]);

const firstP = document.querySelector('p');
const newH1 = document.createElement('h1');
newH1.innerText = 'New Heading';
// Insert the new h1 before the first p
// https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
firstP.insertAdjacentElement('beforebegin', newH1);
