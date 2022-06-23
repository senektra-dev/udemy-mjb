// Get element by tag name

// This is not an actual array, but we can iterate over it
const inputs = document.getElementsByTagName('input');

for (let input of inputs) {
  console.log(input);
  console.log(input.value);
}

// An actual array.
const arr = [...inputs];

