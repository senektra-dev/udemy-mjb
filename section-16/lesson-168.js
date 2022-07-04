// Section 16 - Lesson 168
// Returning Promises from Functions

const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand > 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
};

makeDogPromise().then(() => {
  console.log('You got a new dog!');
}).catch(() => {
  console.log('You got a new cat!');
});
