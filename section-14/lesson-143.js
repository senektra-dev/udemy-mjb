// Changing multiple lines.

// Change the innerText of all the lis in the document.
var lis = document.querySelectorAll('li');
for (var i = 0; i < lis.length; i++) {
  lis[i].innerText = 'Hello World';
}

for (let li of lis) {
  li.innerHTML = 'We are the <strong>champions</strong>';
}

