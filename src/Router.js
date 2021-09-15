import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './App';
import Details from './Pages/Details/index';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
