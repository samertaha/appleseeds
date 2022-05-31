import './App.css';
import { Route, Switch } from 'react-router-dom';

import CancelRequest from './exercises/20.1-cancel request';
import Editing from './exercises/21.1-editing';
import PlayPauseVideo from './exercises/21.2-play pause video';
import ImageToggle from './exercises/21.3-image toggle';

import Header from './components/Header';
function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <CancelRequest />
        </Route>
        <Route path='/Editing'>
          <Editing />
        </Route>
        <Route path='/PlayPauseVideo'>
          <PlayPauseVideo />
        </Route>
        <Route path='/ImageToggle'>
          <ImageToggle />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
