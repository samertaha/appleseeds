// 1

// Website Building: AJAX
// JS – Simple Fetch
// The following exercise contains the following subjects:
// fetch
// Instructions
// Lets do an simple ajax call with fetch using this url “https://
// api.jokes.one/jod”.
// Create a button that will fetch the joke of the day. Display
// to the screen the jokes title and the joke itself.

// const getCountry = (country) => {
//
//   getCountry('usa');

const btn = document.querySelector('#button');
const joke = document.querySelector('#joke');

btn.addEventListener('click', (event) => {
  const fetchingData = fetch(`https://api.jokes.one/jod`)
    .then((response) => {
      // return response.json();
      return response.json();
    })
    .then((response) => {
      joke.innerHTML =
        response.contents.jokes[0].joke.text.split('."')[0] + '"';
    })
    .catch((error) => {
      console.log(error);
    });
});

// const getJoke= (Joke)=>{

// }
