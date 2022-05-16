import React, { useState } from 'react';

const Increment = () => {
  const [counter, setCounter] = useState(0);

  function handleCounter(increment) {
    if (counter < 10 && increment) setCounter(counter + 1);
    if (counter > -10 && !increment) setCounter(counter - 1);
  }

  return (
    <>
      <h1
        style={
          counter === 0
            ? { backgroundColor: 'black' }
            : counter > 0
            ? { backgroundColor: 'green' }
            : { backgroundColor: 'red' }
        }
      >
        {counter}
      </h1>
      <button
        onClick={() => {
          handleCounter(true);
        }}
      >
        Increment Value
      </button>
    </>
  );
};

export default Increment;
