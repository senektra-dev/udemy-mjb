// Section 14 - Lesson 141
// Setting and Getting Attributes.

const range = document.querySelector('input[type="range"]');
// Set and get attributes.
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
console.log(range.getAttribute('max'));
// https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
console.log(range.setAttribute('value', '500'));
console.log(range.setAttribute('type', 'text'))
