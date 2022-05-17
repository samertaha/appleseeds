import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import LifeCycleMethods from './pages/lifeCycleMethods';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='LifeCycleMethods' element={<LifeCycleMethods />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
