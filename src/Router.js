import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './pages/details';
import Portfolio from './pages/portfolio';
import Main from './pages/home';
import Skills from './pages/skills';
import Contact from './pages/contact';
import Blog from './pages/blog';
import Experience from './pages/experience';

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
        <Route path="/experience" component={Experience} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
