import React, { Component } from "react";
import styled from "styled-components";

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <div className="main">
          <div className="header-left">
            <p>When in doubt, Build something</p>
          </div>
          <div className="header-right">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact</li>
          </div>
        </div>
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3b0062;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
  }
  .main {
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid gray; */
  }
  .header-left {
    width: 40%;
    color: white;
    font-weight: bold;
    padding: 5px 0 5px 0;
    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }
  }
  .header-right {
    width: 40%;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 1px solid white;
    color: white;
    font-weight: bold;
    padding: 10px 0 10px 0;
    cursor: pointer;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
