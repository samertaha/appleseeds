import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Buttons from './pages/Buttons';
import Cards from './pages/Cards';
import ClassComponents from './pages/ClassComponents';
import HideAndSeek from './pages/HideAndSeek';
import Increment from './pages/Increment';
import IncrementAndDecrement from './pages/IncrementAndDecrement';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='Buttons' element={<Buttons />} />
              <Route path='Cards' element={<Cards />} />
              <Route path='ClassComponents' element={<ClassComponents />} />
              <Route path='HideAndSeek' element={<HideAndSeek />} />
              <Route path='Increment' element={<Increment />} />
              <Route
                path='IncrementAndDecrement'
                element={<IncrementAndDecrement />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
