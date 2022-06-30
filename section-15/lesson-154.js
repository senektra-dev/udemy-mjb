// Section 15 - Lesson 154
// addEventListener

document.querySelector('button').addEventListener('click', function() {
  alert('You clicked me!');
});

document.querySelector('button').addEventListener('mouseover', function() {
  console.log('Do it!');
});

window.addEventListener('scroll', function(e) {
  console.log('You scrolled!');
});
