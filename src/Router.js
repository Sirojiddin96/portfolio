import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/home';
import Details from './Pages/Details/index';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
