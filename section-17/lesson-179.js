// Section 17 - Lesson 179
// An Even Better Way: Axios

axios
  .get('https://swapi.dev/api/planets/')
  .then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error);  
  });

