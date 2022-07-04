// Section 15 - Lesson 158
// Key Events: keypress, keyup, keydown

const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  // Works when any key is pressed.
  console.log('KEY DOWN');
})

input.addEventListener('keyup', function(e) {
  // Works when any key is released.
  console.log('KEY UP');
})

input.addEventListener('keypress', function(e) {
  // Works when key press produces a character.
  // Works with enter as well.
  console.log('KEY KEYPRESS');
})

input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') console.log(e.target.value);
  console.log('KEY KEYPRESS');
})
