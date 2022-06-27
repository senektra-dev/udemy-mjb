// Section 14 - lesson 149
// removeChild & remove

// Select li to remove
let ul = document.querySelector('section ul');
let removeMe = ul.querySelector('.special');

// Remove li
// htp://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
// let deleted = ul.removeChild(removeMe);
// console.log(deleted);

// or

// Remove li
// htp://developer.mozilla.org/en-US/docs/Web/API/Node/remove
removeMe.remove();

// Keep in mind that remove will not return the removed element.
