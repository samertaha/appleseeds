import React, { useRef } from 'react';

import './styles.css';

import cousinBlack from './cousinBlack.jpg';
import cousinColor from './cousinColor.jpg';
import uncleBlack from './uncleBlack.jpg';
import uncleColor from './uncleColor.png';

function ImageToggle() {
  const cousinBlackRef = useRef(null);
  const uncleBlackRef = useRef(null);

  return (
    <div className='cont'>
      <img
        ref={cousinBlackRef}
        src={cousinBlack}
        alt='cousinBlack'
        onMouseEnter={() => (cousinBlackRef.current.src = cousinColor)}
        onMouseLeave={() => (cousinBlackRef.current.src = cousinBlack)}
      />
      <img
        ref={uncleBlackRef}
        src={uncleBlack}
        alt='uncleBlack'
        onMouseEnter={() => (uncleBlackRef.current.src = uncleColor)}
        onMouseLeave={() => (uncleBlackRef.current.src = uncleBlack)}
      />
    </div>
  );
}

export default ImageToggle;
