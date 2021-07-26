import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ROUTES } from 'constants/routes';

const StyledHeader = styled.header`
  text-align: center;
  flex-shrink: 0;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to={ROUTES.home}>
        <h3>
        🏠 findme
        </h3>
      </Link>
    </StyledHeader>
  );
};

export default Header;