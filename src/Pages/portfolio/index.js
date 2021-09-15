import React from 'react';
import styled from 'styled-components';
import Home from '../home';
import PortFile from '../../sections/Portfolio';

const Portfolio = () => {
  return (
    <Home>
      <Wrapper>
        <PortFile />
      </Wrapper>
    </Home>
  );
};
export default Portfolio;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 10px;
`;
