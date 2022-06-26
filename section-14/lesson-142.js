// Finding parent/children/siblings

const firstLi = document.querySelector('li');

// Find parent element.
console.log(firstLi.parentElement);
console.log(firstLi.parentElement.parentElement);

const ul = document.querySelector('ul');

// Find children elements.
console.log(ul.children);
console.log(ul.children[0]);

// Find next sibling element.
console.log(firstLi.nextElementSibling);
console.log(firstLi.nextElementSibling.previousElementSibling);
