import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/Buttons'>Buttons</Link>
          </li>
          <li>
            <Link to='/Cards'>Cards</Link>
          </li>
          <li>
            <Link to='/ClassComponents'>ClassComponents</Link>
          </li>
          <li>
            <Link to='/HideAndSeek'>HideAndSeek</Link>
          </li>
          <li>
            <Link to='/Increment'>Increment</Link>
          </li>
          <li>
            <Link to='/IncrementAndDecrement'>IncrementAndDecrement</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
