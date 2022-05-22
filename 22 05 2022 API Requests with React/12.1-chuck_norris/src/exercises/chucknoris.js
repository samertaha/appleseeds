import React, { useEffect, useState } from 'react';
import Chuck from './chuck.jpg';
import axios from 'axios';

function ChuckNoris() {
  const [state, setState] = useState({
    joke: '',
    searchKeyword: '',
    searchUrl: 'https://api.chucknorris.io/jokes/search?query=',
    categories: [],
  });

  useEffect(() => {
    fetchData();
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get('https://api.chucknorris.io/jokes/random');
      console.log('random: ', result.data.value);
      setState({
        ...state,
        joke: result.data.value,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCategories = async () => {
    try {
      const result = await axios.get(
        'https://api.chucknorris.io/jokes/categories'
      );
      console.log('categories: ', result.data);
      setState({
        ...state,
        categories: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const searchJoke = (event) => {
    console.log(event.target.value);
    setState({
      ...state,
      searchKeyword: event.target.value,
    });
  };

  const fetchMyJoke = async () => {
    const result = await axios.get(state.searchUrl + state.searchKeyword);
    console.log(result.data.result);

    const jokePosition = Math.floor(
      Math.random() * result.data.result.length + 1
    );
    console.log(jokePosition);
    setState({
      ...state,
      joke: result.data.result[jokePosition].value,
    });
  };

  const fetchRandomJoke = async () => {
    fetchData();
  };

  const fetchCors = async (url) => {
    try {
      const res = await fetch(
        'https://nameless-citadel-58066.herokuapp.com/' + url
      );
      const data = await res.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  const fetchJokeCategory = async (category) => {
    console.log(category);
    const result = await fetchCors(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );

    console.log('category joke: ', result);

    // const jokePosition = Math.floor(
    //   Math.random() * result.data.result.length + 1
    // );
    // console.log(jokePosition);
    setState({
      ...state,
      joke: result.value,
    });
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <h1 className='title'>Chuck Norris API</h1>
          <img src={Chuck} alt='Chuck Norris' />
        </div>

        <div className='col-6 searchJokeCol'>
          <div className='card'>
            <div className='card-header'>Search for a word</div>
            <div className='card-body'>
              <input type='text' onChange={searchJoke} />
            </div>
          </div>

          <div>
            <button onClick={fetchMyJoke} className='btn btn-warning btn-lg'>
              Search
            </button>
            <br />
            <button
              onClick={fetchRandomJoke}
              className='btn btn-warning btn-lg'
            >
              Random Joke
            </button>
            <div className='card-header'>Categories</div>
            {state.categories.map((catName, index) => (
              <button
                type='button'
                key={index}
                onClick={(e) => fetchJokeCategory(e.target.textContent)}
              >
                {catName}
              </button>
            ))}
          </div>
        </div>
      </div>

      <h2 className='subTitle'>Here is the Joke</h2>
      <h4>{state.joke}</h4>
    </div>
  );
}

export default ChuckNoris;
