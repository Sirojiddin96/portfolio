import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './Pages/details/index';
import Portfolio from './Pages/portfolio/index';
import Main from './Pages/home/index';
import Skills from './Pages/skills';
import Contact from './Pages/contact';
import Blog from './Pages/blog';
import Experience from './Pages/experience';

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
