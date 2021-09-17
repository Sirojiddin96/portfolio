import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <div className="main">
          <div className="header-left">
            <Link to="portfolio">Portfolio</Link>
          </div>
          <div className="header-right">
            <Link to="/">Home</Link>

            <Link to="/skills">Skills</Link>
            <Link to="/portfolio">Portfolio</Link>
            {/* <Link to="/blog">Blog</Link> */}
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  // box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-bottom: none;
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
    a {
      text-decoration: none;
      color: #3b0062;
    }
    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }
  }
  .header-right {
    width: 30%;
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
    a {
      text-decoration: none;
      color: #3b0062;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
