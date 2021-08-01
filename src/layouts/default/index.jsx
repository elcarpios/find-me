import React from 'react';

import * as S from './styles';

import Header from 'components/common/Header';
import NavBar from 'components/common/NavBar';

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