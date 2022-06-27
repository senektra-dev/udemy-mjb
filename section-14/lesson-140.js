// Sectin 14 - Lesson 140
// value, src, href and more

let inputs = document.querySelectorAll('input');
console.log(inputs);

console.log(inputs[0].value);

inputs[0].value = '';

console.log(inputs[2].checked);


// Change placeholder text of inputs.
inputs[0].placeholder = 'Enter your name';

let a = document.querySelector('a');
console.log(a.href);

a.href = 'https://www.google.com';

let img = document.querySelector('img');
console.log(img.src);
