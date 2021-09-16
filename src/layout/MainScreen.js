import React from 'react';
import styled from 'styled-components';

function MainScreen(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

export default MainScreen;

const Wrapper = styled.div`
  width: 100%;
  // max-width: 1280px;
  height: auto;
  margin: auto;
  // background-color: #e5e5e5;
`;
