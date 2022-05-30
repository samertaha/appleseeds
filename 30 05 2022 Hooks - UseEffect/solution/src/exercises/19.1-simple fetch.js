import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Swapi() {
  const [movie, setMovie] = useState({ title: '', director: '' });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://swapi.dev/api/films/1/');

      setMovie({ title: result.data.title, director: result.data.director });
      console.log(result);
    };
    fetchData();

    // setMovie(result.data);
  }, []);
  return (
    <>
      <div>{'title : ' + movie.title}</div>
      <div>{'director :' + movie.director}</div>
    </>
  );
}

export default Swapi;
