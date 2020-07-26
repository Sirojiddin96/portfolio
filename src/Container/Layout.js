import React, { Component } from "react";

import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Layout extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        {this.props.children}
        <Footer />
      </Wrapper>
    );
  }
}
export default Layout;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
