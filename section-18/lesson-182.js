// Seciton 18 - Lesson 182
// The Async Keyword

// Async functions return a Promise.
async function greet() {
  return 'Hello';
}

greet().then((val) => {
  console.log('The value is', val);
  // .then will wait for any returns that are promises to be resolved.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('hell')
      resolve();
      reject();
      console.log('oh no');
    }, 3000);
  });
}).then((val) => { 
  console.log('Finished', val);
});

async function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number')
    throw new Error('Invalid input');
  return x + y;
}

// If this is not handled by the time the script is finished, the window
// will alert an unhandled promise rejection error.
const addition = add('e', 'f');

// addition.catch((err) => console.log(err) );
