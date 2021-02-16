import React from "react";
import styled from "styled-components";
import Main from "./Pages";

function App() {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: auto;
  margin: auto;
`;
