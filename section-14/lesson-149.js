// Section 14 - lesson 149
// removeChild & remove

// Select li to remove
const ul = document.querySelector('section ul');
const removeMe = ul.querySelector('.special');

// Remove li
// htp://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
// const deconsted = ul.removeChild(removeMe);
// console.log(deconsted);

// or

// Remove li
// htp://developer.mozilla.org/en-US/docs/Web/API/Node/remove
removeMe.remove();

// Keep in mind that remove will not return the removed element.
