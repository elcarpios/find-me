import React from 'react';
import styled from 'styled-components';

import Header from 'components/common/Header';
import NavBar from 'components/common/NavBar';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  flex-wrap: nowrap;
  background: linear-gradient(180deg, #00AA9B 0%, rgba(0, 170, 155, 0) 90%);
`;

const StyledMain = styled.main`
  flex-grow: 1;
  overflow: auto;
`;

export const Default = ({ children }) => (
  <StyledLayout>
    <Header />
    <StyledMain>
      { children }
    </StyledMain>
    <NavBar />
  </StyledLayout>
);

export default Default;