// Section 14 - lesson 149
// removeChild & remove

// Select li to remove
const ul = document.querySelector('section ul');
const removeMe = ul.querySelector('.special');

// Remove li
const deleted = ul.removeChild(removeMe);
console.log(deleted);

