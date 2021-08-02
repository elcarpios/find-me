import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';
import { ROUTES } from 'constants/routes';

const Header = () => {
  return (
    <S.Header>
      <Link to={ROUTES.home}>
        <S.H3>
          findme
        </S.H3>
      </Link>
    </S.Header>
  );
};

export default Header;