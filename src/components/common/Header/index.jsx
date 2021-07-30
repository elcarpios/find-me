import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ROUTES } from 'constants/routes';

const StyledHeader = styled.header`
  text-align: center;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90px;
`;

const StyledPill = styled.h3`
  color: white;
  border: 1px solid white;
  display: inline-block;
  padding: 5px 25px;
  border-radius: 4px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to={ROUTES.home}>
        <StyledPill>
          findme
        </StyledPill>
      </Link>
    </StyledHeader>
  );
};

export default Header;