import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import LifeCycleMethods from './pages/lifeCycleMethods';
import BoxAnimations from './pages/BoxAnimations';
import Changingbox from './pages/Changingbox';
import Spinner from './pages/Spinner';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='LifeCycleMethods' element={<LifeCycleMethods />} />
              <Route path='BoxAnimations' element={<BoxAnimations />} />
              <Route path='Changingbox' element={<Changingbox />} />
              <Route path='Spinner' element={<Spinner />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
