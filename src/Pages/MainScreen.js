import React from 'react';
import styled from 'styled-components';

function MainScreen(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

export default MainScreen;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
`;
