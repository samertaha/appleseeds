import React, { useState } from 'react';
import Input from './21.1-editingChild';

function Editing() {
  const [mounted, setMounted] = useState(true);

  return (
    <>
      <button type='button' onClick={() => setMounted(!mounted)}>
        {mounted ? 'save' : 'edit'}
      </button>
      {mounted && <Input />}
    </>
  );
}

export default Editing;
