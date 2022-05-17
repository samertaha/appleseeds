import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/LifeCycleMethods'>8.1-life-cycle-methods</Link>
          </li>
          <li>
            <Link to='/BoxAnimations'>8.2-box_animations</Link>
          </li>
          <li>
            <Link to='/Changingbox'>8.3-changing_box</Link>
          </li>
          <li>
            <Link to='/Spinner'>9.1-spinner</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
