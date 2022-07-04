// Section 17 - Lesson 174
// XMLHttpRequests: The Basics

const firstReq = new XMLHttpRequest();

firstReq.addEventListener('load', () => {
  console.log(firstReq.responseText);
});

firstReq.addEventListener('error', () => {
  console.log('error');
});

firstReq.open('GET', 'https://swapi.dev/api/planets/');
firstReq.send();

console.log('Request sent');
