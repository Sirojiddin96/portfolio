import React from 'react';
import styled from 'styled-components';
import Header from './Header';

function MainScreen(props) {
  return (
    <Wrapper>
      <Header />
      {props.children}
    </Wrapper>
  );
}

export default MainScreen;

const Wrapper = styled.div`
  width: 100%;
  //  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #041f31;
`;
