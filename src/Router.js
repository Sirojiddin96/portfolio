import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./Pages/Screens/About";
import Skills from "./Pages/Screens/Skills";
import Portfolio from "./Pages/Screens/Portfolio";
import Contact from "./Pages/Screens/Contact";

export default function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main} />
      <Route path="About" component={About} />
      <Route path="Contact" component={Contact} />
      <Route path="Header" component={Header} />
      <Route path="Portfolio" component={Portfolio} />
      <Route path="Skills" component={Skills} />
    </BrowserRouter>
  );
}
