// value, src, href and more

const inputs = document.querySelectorAll('input');
console.log(inputs);

console.log(inputs[0].value);

inputs[0].value = '';

console.log(inputs[2].checked);


// Change placeholder text of inputs.
inputs[0].placeholder = 'Enter your name';

const a = document.querySelector('a');
console.log(a.href);

a.href = 'https://www.google.com';

const img = document.querySelector('img');
console.log(img.src);
