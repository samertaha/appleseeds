import './App.css';
import { Route, Switch } from 'react-router-dom';

import Swapi from './exercises/19.1-simple fetch';
import Countries from './exercises/19.2-countries of the world';
import AlgoliaSearch from './exercises/19.3-algolia api';
import ChuckNorris from './exercises/19.4- refactor fetch with hooks';

import Header from './components/Header';
function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Swapi />
        </Route>
        <Route path='/Countries'>
          <Countries />
        </Route>
        <Route path='/AlgoliaSearch'>
          <AlgoliaSearch />
        </Route>
        <Route path='/ChuckNorris'>
          <ChuckNorris />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
