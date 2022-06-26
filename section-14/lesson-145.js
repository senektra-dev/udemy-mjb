// getComputedSytle

// Select first li element
const li = document.querySelector('li');

// Get the computed style of the li element.
const computedStyle = getComputedStyle(li);
console.log(computedStyle);

const computedH1Style = getComputedStyle(document.querySelector('h1'));

// Hover over h1 before running following code to get the computed style of the h1 element.
// console.log(computedH1Style.color);
