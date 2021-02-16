import React, { Component } from "react";
import styled from "styled-components";
import { AiOutlineCopyright } from "react-icons/ai";

export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <Contact>
          <ListContainer>
            <li>Home</li>
            <li>About</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ListContainer>
          <CopyrightContainer>
            <p>
              All Rights Reserved. <AiOutlineCopyright size={15} />
              2020
            </p>
            <p>karimov.com</p>
            <p>
              Created By : <strong>Karimov Sirojiddin</strong>{" "}
            </p>
          </CopyrightContainer>
        </Contact>
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
  background-color: #333333;
`;
const Contact = styled.div`
  width: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px;
`;
const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  list-style: none;

  li {
    margin: 10px;
    font-size: 20px;
    font-family: Arial;
    font-weight: 500;
    color: lightgray;
  }
`;
const CopyrightContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-left: 10px;
  p {
    font-size: 20px;
    font-family: Arial;
    font-weight: 500;
    margin: 0 0 0 10px;
    color: lightgray;
  }
  p:first-child {
    margin: 0;
  }
`;
