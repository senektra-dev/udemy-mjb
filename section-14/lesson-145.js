// Section 14 - Lesson 144
// getComputedSytle

// Select first li element
let li = document.querySelector('li');

// Get the computed style of the li element.
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getComputedStyle
let computedStyle = getComputedStyle(li);
console.log(computedStyle);

let computedH1Style = getComputedStyle(document.querySelector('h1'));

// Hover over h1 before running following code to get the computed style of the h1 element.
// console.log(computedH1Style.color);
