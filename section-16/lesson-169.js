// Section 16 - Lesson 169
// Resolving/Rejecting w/ Values

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.3) {
        reject({status: 404});
      } else {
        const pages = ['Home', 'About', 'Contact'];
        resolve({pages: pages});
      }
    }, 1000);
  });
}

fakeRequest().then((res) => {
  console.log(res.pages);
}).catch((res) => {
  console.log(res.status);
});
