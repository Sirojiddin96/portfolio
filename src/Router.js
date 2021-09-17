import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './Pages/Details/index';
import Portfolio from './Pages/portfolio/index';
import Main from './components/Main';
import Skills from './Pages/skills/index.tsx';
import Contact from './Pages/contact';
import Blog from './Pages/blog';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/details" component={Details} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
