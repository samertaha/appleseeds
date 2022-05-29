import './App.css';

import TextMoreLess from './exercices/18.1-text';
import SimpleTodo from './exercices/18.2-simple todo';
import WhatsTheTime from './exercices/18.3-whats the time';
import MarketingAndDeleting from './exercices/18.4-marketing and deleting';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <TextMoreLess
          text='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
          maxLength={30}
        />
        <TextMoreLess
          text='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
          maxLength={250}
        />

        <SimpleTodo /> */}
        {/* <WhatsTheTime /> */}
        <MarketingAndDeleting />
      </header>
    </div>
  );
}

export default App;
