// Section 17 - Lesson 176
// A Better Way: Fetch!

fetch('https://swapi.dev/pi/planets/')
  .then(response => {
    if (response.ok) {
      response.json().then(data => {
        for (let planet of data.results) {
          console.log(planet.name);
        }
      });
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .catch(error => {
    // Only ran on network failure
    // HTTP response codes 4xx and 5xx will resolve.
    console.log(error);
  });


