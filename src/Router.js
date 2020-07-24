import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="Header" component={Header} />
      <Route />
      <Route />
      <Route />
      <Route />
    </BrowserRouter>
  );
}
