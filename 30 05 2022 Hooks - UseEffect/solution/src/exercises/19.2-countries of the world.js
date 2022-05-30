import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function Countries() {
  const [countries, setCountries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://api.countrylayer.com/v2/all?access_key=ecdbc12e6b33e9f7b7406d9321e9a295'
      );
      setCountries(result.data);
      setSearchResults(result.data);
    };
    try {
      fetchData();
    } catch (error) {
      console.error('An error occurred: ', error);
    }
    // setMovie(result.data);
  }, []);

  const handleChange = (e) => {
    const input = e.target;
    console.log(input.value);
    setSearchTerm(input.value);
    if (input.value.length)
      setSearchResults(
        countries.filter((country) =>
          country.name.toLowerCase().includes(input.value.toLowerCase())
        )
      );
    else setSearchResults(countries);
  };
  return (
    <>
      <input type='text' value={searchTerm} onChange={handleChange} />
      <ul>
        {searchResults.map((country, i) => (
          <li key={i} style={{ display: 'block' }}>
            {country.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Countries;
