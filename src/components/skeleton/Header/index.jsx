import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';
import { ROUTES } from 'constants/routes';

const Header = ({ title = 'findme'}) => {
  return (
    <S.Header>
      <Link to={ROUTES.home}>
        <S.Pill as="h3">
          { title }
        </S.Pill>
      </Link>
    </S.Header>
  );
};

export default Header;