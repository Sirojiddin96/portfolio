import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./Pages/Screens/About";
import Contact from "./Pages/Screens/Contact";
import Portfolio from "./Pages/Screens/Portfolio";
import Skills from "./Pages/Screens/Skills";

function App() {
  return (
    <div>
      <Header />
      <hr />
      <Main />
      <Footer />
    </div>
    // {/* <BrowserRouter>
    //   <Router>
    //     <Route exact path="/" component={Main} />
    //     <Route path="About" component={About} />
    //     <Route path="Contact" component={Contact} />
    //     <Route path="Header" component={Header} />
    //     <Route path="Portfolio" component={Portfolio} />
    //     <Route path="Skills" component={Skills} />
    //   </Router>
    // </BrowserRouter> */}
  );
}

export default App;
