// Seciton 14 - app.js

// The lesson javscript files found in this directory use let for variable declarations.
// Doing so will let us use the same variable names in all the lessons and not cause
// variable name conflicts when loading lessons.

// Set this to true to automatically load placeholder lesson.
let autoLoadPlaceholder = true;

/**
 * It removes the current script tag from the head of the document, then creates a
 * new script tag with the id of 'set-lesson-js' and the src of the lesson that was
 * passed in.
 * @param lesson - The name of the lesson you want to load.
 */
function setLessonJsScript(lesson) {
  let setLessonJs = document.getElementById('set-lesson-js');

  if (setLessonJs !== null) setLessonJs.remove();

  let newScript = document.createElement('script');
  newScript.id = 'set-lesson-js';
  newScript.src = `lesson-${lesson}.js`;
  newScript.onerror = () => alert('Error loading script');
  
  document.head.appendChild(newScript);
}

let lesson = document.querySelector('#js-selector').addEventListener('submit', (e) => {
  e.preventDefault();
  if (e.target.elements.lesson.value === '') {
    setLessonJsScript(e.target.elements.lesson.placeholder);
  } else {
    setLessonJsScript(e.target.elements.lesson.value);
  }
});

if (autoLoadPlaceholder) {
  setLessonJsScript(document.querySelector('#js-selector').elements.lesson.placeholder);
}
