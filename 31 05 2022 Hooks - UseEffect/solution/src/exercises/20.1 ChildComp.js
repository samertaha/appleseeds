import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Child() {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  const fetchData = async (controller) => {
    setLoading(true);

    const result = await axios(
      `https://hn.algolia.com/api/v1/search?query=hooks`,
      {
        signal: controller.signal,
      }
    );
    setLoading(false);
    setResults(result.data.hits);
  };

  useEffect(() => {
    const controller = new AbortController();
    try {
      fetchData(controller);
    } catch (error) {
      console.error('An error occurred: ', error);
    }

    return () => {
      // cancel the request
      controller.abort();
    };
  }, []);

  return (
    <>
      <div>
        {loading && <h1>loading.....</h1>}
        {results.map((result, i) => (
          <h3 key={i}>{result.title}</h3>
        ))}
      </div>
    </>
  );
}

export default Child;
