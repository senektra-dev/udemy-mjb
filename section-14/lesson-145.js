// Section 14 - Lesson 144
// getComputedSytle

// Select first li element
const li = document.querySelector('li');

// Get the computed style of the li element.
// developer.mozilla.org/en-US/docs/Web/API/Element/getComputedStyle
const computedStyle = getComputedStyle(li);
console.log(computedStyle);

const computedH1Style = getComputedStyle(document.querySelector('h1'));

// Hover over h1 before running following code to get the computed style of the h1 element.
// console.log(computedH1Style.color);
