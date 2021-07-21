import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h5>
        Findme <span>by Alberto & Carpio</span>
      </h5>
    </StyledFooter>
  );
};

export default Footer;