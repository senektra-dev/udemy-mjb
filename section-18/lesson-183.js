// Section 18 - Lesson 183
// The Await Keyword

// function getPlanets() {
//   return axios.get('https://swapi.dev/api/planets/');
// }

async function getPlanets() {
  const res = await axios.get('https://swapi.dev/api/planets/');
  console.log(res.data);
}

getPlanets();
