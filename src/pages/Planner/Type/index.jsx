import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';
import { ROUTES } from 'constants/routes';

const Type = () => {
  return (
    <S.Container>
      <S.Title>
        <h1>I want</h1>
        <S.Pill as={Link} to={ROUTES.home}>Back</S.Pill>
      </S.Title>
      <S.List>
        <S.ListElement as={Link} to={{
          pathname: ROUTES.planner.when,
          state: {
            singleMode: true
          }
        }}>
          📌 Single Day
        </S.ListElement>
        <S.ListElement as={Link} to={ROUTES.planner.when}>
          🛫Multiple Day
        </S.ListElement>
      </S.List>
    </S.Container>
  );
};

export default Type;