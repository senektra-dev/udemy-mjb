// Section 15 - Lesson 157
// The Event Object

const colors = [
  'red',
  'green',
  'blue',
  'yellow',
  'orange',
  'purple',
  'pink',
  'brown',
  'black',
]

function printColor(e) {
  // The e object is the event object. It contains information about the event.
  console.log(e.target.style.backgroundColor);
  console.log(this.style.backgroundColor);
}

const container = document.querySelector('.container');

for (let color of colors) {
  const box = document.createElement('div');
  box.style.backgroundColor = color
  box.classList.add('box');
  container.append(box);
  
  box.addEventListener('click', printColor);
}
