import React, { Component } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

export default class Banner extends Component {
  render() {
    return (
      <Wrapper>
        <div className="main">
          {/* <img
                className="image"
                src={definition}
                alt="Banner"
                style={{ width: "100%", height: "100%", opacity: "0.7" }}
              /> */}
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{ width: "100%", height: "100%", opacity: "0.7" }}
          />
        </div>

        <hr width="100%" />
        <div>
          <h2
            style={{
              fontStyle: "inherit",
              fontWeight: 500,
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            About me
          </h2>
        </div>
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
  .main {
    width: 100%;
    height: 300px;
    background-color: #25274d;
  }
`;
