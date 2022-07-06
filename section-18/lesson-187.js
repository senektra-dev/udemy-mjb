// Section 18 - Lesson 186
// Parallel Vs. Sequential Requests

// Sequential Requests
async function get3PokemonSeq() {
  try {
    const poke1 = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    const poke2 = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    const poke3 = await fetch('https://pokeapi.co/api/v2/pokemon/1');
  } catch (e) {
    console.log('error', e);
  }
}

async function get3PokemonPar() {
  try {
    const poke1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const poke2 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const poke3 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    await poke1;
    await poke2;
    await poke3;
  } catch (e) {
    console.log('error', e);
  }
}

function changeBodyColorWithPromise(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
}

// Change the color of body three times with teal, tan and maroon
async function changeBodyColor() {
  try {
    const color1 = changeBodyColorWithPromise('teal', 1000);
    const color2 =  changeBodyColorWithPromise('tan', 1000);
    const color3 = changeBodyColorWithPromise('maroon', 1000);
    // await color1;
    // await color2;
    // await color3;
    /* await */ Promise.all([color1, color2, color3]);
  } catch (e) {
    console.log('error', e);
  }
}

changeBodyColor();
