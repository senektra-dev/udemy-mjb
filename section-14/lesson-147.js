// Creating Elements

// We can use the document.createElement() method to create a new element.
const newH2 = document.createElement('h2');

newH2.innerText = 'Uh, where am I?';

const section = document.querySelector('section');

// Append newH2 to section.
section.appendChild(newH2);
