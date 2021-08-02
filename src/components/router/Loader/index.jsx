import React from 'react';

import * as S from './styles';

const Loader = () => (
  <S.Container>
    <h2>Be ready for what is coming</h2>
    <S.Loader><div></div><div></div><div></div><div></div></S.Loader>
  </S.Container>
);

export default React.memo(Loader);