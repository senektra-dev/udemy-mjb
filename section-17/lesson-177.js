// Section 17 - Lesson 177
// A Better Way: Fetch!

fetch('https://swapi.dev/api/planets/')
  .then(response => {
    if (!response.ok)
      throw new Error('Network response was not ok.');
    
    return response.json();
  })
  .then(data => {
    const filmUrl = data.results[0].films[0];
    return fetch(filmUrl);
  })
  .then(response => {
    if (!response.ok)
      throw new Error('Network response was not ok.');

    return response.json();
  })
  .then(data => {
    // The first film from the first planet fetched.
    console.log(data);
  })
  .catch(error => {
    // Only ran on network failure
    // HTTP response codes 4xx and 5xx will resolve.
    console.log(error);
  });


