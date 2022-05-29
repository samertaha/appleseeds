import React, { useState, useEffect } from 'react';

function MarketingAndDeleting() {
  const [points, setPoints] = useState({});

  useEffect(() => {
    setPoints({
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
    });
  }, []);

  function handleChange(e) {
    const input = e.target;
    console.log(input);
    setPoints({ ...points, [input.name]: input.checked ? true : false });
  }
  function handleDelete(e) {
    const asArray = Object.entries(points);
    const filtered = asArray.filter(([key, value]) => value === false);
    const justStrings = Object.fromEntries(filtered);
    setPoints(justStrings);
  }
  function handleReset(e) {
    setPoints({
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
    });
  }

  return (
    <div>
      <button type='button' onClick={handleDelete}>
        Delete
      </button>
      <button type='button' onClick={handleReset}>
        Reset
      </button>

      <ul>
        {console.log(points)}
        {Object.keys(points).map((key, i) => {
          return (
            <li key={i}>
              <input
                type='checkbox'
                name={key}
                checked={points[key]}
                onChange={handleChange}
              />
              <span>{key}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MarketingAndDeleting;
