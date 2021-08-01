import React from 'react';

import * as S from './styles';

export const Overlay = ({ children }) => (
  <S.Layout>
    { children }
  </S.Layout>
);

export default Overlay;