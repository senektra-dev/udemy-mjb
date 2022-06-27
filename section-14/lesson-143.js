// Section 14 - Lesson 143
// Changing multiple lines.

// Change the innerText of all the lis in the document.
const lis = document.querySelectorAll('li');
for (var i = 0; i < lis.length; i++) {
  lis[i].innerText = 'Hello World';
}

for (const li of lis) {
  li.innerHTML = 'We are the <strong>champions</strong>';
}

