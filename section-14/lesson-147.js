// Section 14 - Lesson 147
// Creating Elements

// We can use the document.createElement() method to create a new element.
const newH2 = document.createElement('h2');

newH2.innerText = 'Uh, where am I?';

const section = document.querySelector('section');

// Append newH2 to section.
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
section.appendChild(newH2);
