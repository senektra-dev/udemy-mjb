// Section 17 - Lesson 178
// A Better Way: Fetch!

const checkStatusAndParse = response => {
  if (!response.ok)
    throw new Error('Network response was not ok.');

  return response.json();
}

const printPlanets = data => {
  for (let planet of data.results) {
    console.log(planet.name);
  }
  
  return Promise.resolve(data);
}

const fetchNextPlanets = data => {
  return fetch(data.next)
}

fetch('https://swapi.dev/api/planets/')
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch(error => {
    console.log(error);
  });


