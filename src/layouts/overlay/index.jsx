import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(180deg, #00AA9B 0%, rgba(0, 170, 155, 0) 90%);
`;

export const Overlay = ({ children }) => (
  <StyledLayout>
    { children }
  </StyledLayout>
);

export default Overlay;