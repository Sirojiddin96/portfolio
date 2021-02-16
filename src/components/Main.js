import React, { Component } from "react";
import styled from "styled-components";

import "../App.css";
import About from "../Pages/Screens/About";
import Skills from "../Pages/Screens/Skills";
import Portfolio from "../Pages/Screens/Portfolio";
import Contact from "../Pages/Screens/Contact";
import Banner from "./Banner";

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Banner />
        <About />
        <Skills />
        {/* Portfolio */}
        <Portfolio />
        {/*  Contact   */}
        <Contact />
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
