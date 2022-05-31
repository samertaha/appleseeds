import React, { useState } from 'react';
import Child from './20.1 ChildComp';

function CancelRequest() {
  const [mounted, setMounted] = useState(true);

  return (
    <>
      <button
        type='button'
        onClick={() => {
          setMounted(!mounted);
        }}
      >
        Mount it!
      </button>
      {mounted && <Child />}
    </>
  );
}

export default CancelRequest;
