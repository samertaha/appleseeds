import logo from './logo.svg';
import './App.css';
import { SomkeComp, Focus } from './exercises/14.1 focus';
import Copy from './exercises/14.2 copy';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          style={{ width: '200px' }}
          src={logo}
          className='App-logo'
          alt='logo'
        />
        <p>23 05 2022 Refs exercises</p>
        {/* <Focus />
        <SomkeComp /> */}
        <Copy />
      </header>
    </div>
  );
}

export default App;
