import React, { useState, useEffect } from 'react';

function TextMoreLess({ text, maxLength }) {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    console.log(text, maxLength);
    if (text.length > maxLength) setHidden(true);
  }, []);
  function more() {
    setHidden(false);
  }
  function less() {
    setHidden(true);
  }
  return (
    <>
      {!hidden && (
        <p>
          {text}
          {text.length > maxLength && (
            <a href='' onClick={less}>
              less
            </a>
          )}
        </p>
      )}

      {hidden && (
        <p>
          {text.slice(0, maxLength - 1)}
          <a href='#' onClick={more}>
            more
          </a>
        </p>
      )}
    </>
  );
}

export default TextMoreLess;
