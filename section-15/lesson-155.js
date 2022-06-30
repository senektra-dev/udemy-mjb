// Section 15 - Lesson 155
// The Impossible Button Demo

const ibtn = document.querySelector('.impossible-button');

ibtn.addEventListener('mouseover', () => {
  const h = Math.floor(Math.random() * window.innerHeight);
  const w = Math.floor(Math.random() * window.innerWidth);
  
  ibtn.style.top = `${h}px`;
  ibtn.style.left = `${w}px`;
});


ibtn.addEventListener('click', () => {
  ibtn.innerText = 'YOU GOT ME';
  document.body.style.backgroundColor = 'green';
})
