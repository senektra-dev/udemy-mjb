// Section 18 - Lesson 185
// Multiple Awaits

const btn = document.querySelector('button');

const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        reject();
      }
      else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
}

async function animateRight(el) {
  try {
    await moveX(btn, 100, 1000);
    await moveX(btn, 200, 1000);
    await moveX(btn, 300, 1000);
    await moveX(btn, 400, 1000);
    await moveX(btn, 500, 1000);
    await moveX(btn, 600, 1000);
  } catch (e) {
    console.log('rejected', e);
  }
}

animateRight();

// moveX(btn, 300, 1000)
//   .then(() => moveX(btn, 300, 1000))
//   .then(() => moveX(btn, 300, 1000))
//   .then(() => moveX(btn, 300, 1000))
//   .catch(() => console.log('Can\'t move any farther'))
