// Section 14 - Lesson 142
// Finding parent/children/siblings

let firstLi = document.querySelector('li');

// Find parent element.
// https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement
console.log(firstLi.parentElement);
console.log(firstLi.parentElement.parentElement);

let ul = document.querySelector('ul');

// Find children elements.
// https://developer.mozilla.org/en-US/docs/Web/API/Node/children
console.log(ul.children);
console.log(ul.children[0]);

// Find next sibling element.
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling
console.log(firstLi.nextElementSibling);
console.log(firstLi.nextElementSibling.previousElementSibling);
