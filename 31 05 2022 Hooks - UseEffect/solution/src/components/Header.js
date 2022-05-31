import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
      <li>
        <Link to='/'>Cancel request</Link>
      </li>
      <li>
        <Link to='/Editing'>Editing</Link>
      </li>
      <li>
        <Link to='/PlayPauseVideo'>Play Pause video</Link>
      </li>
      <li>
        <Link to='/ImageToggle'>Image Toggle</Link>
      </li>
    </ul>
  );
}
