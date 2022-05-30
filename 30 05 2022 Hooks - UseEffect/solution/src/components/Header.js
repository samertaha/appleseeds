import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
      <li>
        <Link to='/'>Simple Fetch</Link>
      </li>
      <li>
        <Link to='/Countries'>Countries</Link>
      </li>
      <li>
        <Link to='/AlgoliaSearch'>Algolia API</Link>
      </li>
      <li>
        <Link to='/ChuckNorris'>Chuck Norris</Link>
      </li>
    </ul>
  );
}
