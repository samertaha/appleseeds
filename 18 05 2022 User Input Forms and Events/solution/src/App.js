import logo from './logo.svg';
import './App.css';
import Father from './exercises/11.1-child_to_father';
import Checkboxes from './exercises/11.2-checkbox';
import FormApp from './exercises/11.3-form_review';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/* <Father />
        <Checkboxes /> */}
        <FormApp />
      </header>
    </div>
  );
}

export default App;
