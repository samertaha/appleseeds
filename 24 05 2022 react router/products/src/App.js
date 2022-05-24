import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import Product from './Product';

export default function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route path='/product/:id' component={Product} />
      </Switch>
    </div>
  );
}
