// Section 15 - Lesson 156
// Events on Multiple Elements

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

function printColor() {
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
