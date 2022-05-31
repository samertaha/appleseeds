import React, { useState, useEffect, useRef } from 'react';

function Input() {
  const [val, setVal] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <input
      type='text'
      ref={inputRef}
      value={val}
      onChange={(e) => {
        setVal(e.target.value);
      }}
    />
  );
}

export default Input;
