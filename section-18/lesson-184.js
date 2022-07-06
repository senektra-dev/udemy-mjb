// Section 18 - Lesson 184
// Error Handling in Async Functions

async function getPlanets() {
  try {
    const res = await axios.get('https://swapi.dev/api/planets/');
  } catch (e) {
    console.log(e);
  }
}

getPlanets();

console.log('Finished... or really?');

// getPlanets().catch(err => {
//   console.log(err);
// });
