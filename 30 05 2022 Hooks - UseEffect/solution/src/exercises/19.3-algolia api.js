import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AlgoliaSearch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [algoliaResults, setAlgoliaResults] = useState([]);
  // const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('hooks');
  const [search, setSearch] = useState('hooks');

  const fetchData = async () => {
    setLoading(true);
    const result = await axios(
      `https://hn.algolia.com/api/v1/search?query=${search}`
    );
    setLoading(false);
    setAlgoliaResults(result.data.hits);
    console.log(result.data.hits);
  };

  useEffect(() => {
    try {
      fetchData();

      //console.log(algoliaResults);
    } catch (error) {
      console.error('An error occurred: ', error);
      setLoading(false);
      setError(error);
    }
  }, []);

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.error('An error occurred: ', error);
      setError(error);
    }
  }, [search]);

  const handleChange = (e) => {
    const input = e.target;
    console.log(input.value);
    setSearchTerm(input.value);
  };

  const doSearch = () => {
    setSearch(searchTerm);
  };

  return (
    <>
      <input type='text' value={searchTerm} onChange={handleChange} />
      <button type='button' onClick={doSearch}>
        Search now
      </button>
      {loading && <h3>loading..</h3>}
      {error && <h3>{error}</h3>}
      <ul>
        {algoliaResults.map((hit, i) => (
          <li key={i} style={{ display: 'block' }}>
            <a href={hit.url} target='_blank'>
              {hit.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default AlgoliaSearch;
