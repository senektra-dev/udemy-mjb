// innerHTML

const form = document.querySelector('form');

console.log(form.innerHTML); // Shows everyhing.

// Change the html content of form.

form.innerHTML = '<b>Hello World</b>';
// Changing the html of form will create a new dom object.
console.dir(form);
