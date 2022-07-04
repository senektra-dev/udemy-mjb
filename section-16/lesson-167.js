// Section 16 - Lesson 167
// Introducing Promises

const willGetNewDog = new Promise((resolve, reject) => {
  const rand = Math.random();
  if (rand > 0.5) {
    resolve();
  } else {
    reject();
  }
});

willGetNewDog.then(() => {
  console.log('You got a new dog!');
});

willGetNewDog.catch(() => {
  console.log('You got a new cat!');
});
