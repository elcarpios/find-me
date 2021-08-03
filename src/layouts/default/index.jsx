import React from 'react';

import * as S from './styles';

import Header from 'components/skeleton/Header';
import NavBar from 'components/skeleton/NavBar';

export const Default = ({ children }) => (
  <S.Layout>
    <Header />
    <S.Main>
      { children }
    </S.Main>
    <NavBar />
  </S.Layout>
);

export default Default;