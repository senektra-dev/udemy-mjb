// Section 16 - Lesson 165
// How Asynchronous Callbacks Actually Work

console.log("FIRST");

setTimeout(() => {
  console.log("THIRD");
}, 3000);

console.log("SECOND");
