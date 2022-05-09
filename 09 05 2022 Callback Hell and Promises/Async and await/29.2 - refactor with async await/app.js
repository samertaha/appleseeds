const btn = document.querySelector('#button');
const joke = document.querySelector('#joke');

btn.addEventListener('click', async (event) => {
  try {
    const fetchingData = await fetch(`https://api.jokes.one/jod`);
    const response = await fetchingData.json();
    joke.innerHTML = response.contents.jokes[0].joke.text.split('."')[0] + '"';
  } catch (e) {
    console.log(e);
  }
});
