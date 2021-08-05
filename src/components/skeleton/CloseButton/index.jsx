import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';
import { ROUTES } from 'constants/routes';

const SVG_SIZE = '34';

const CloseButton = () => (
  <S.Container as={Link} to={ROUTES.home} height={SVG_SIZE}>
    <svg width={SVG_SIZE} height={SVG_SIZE} viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.9192 7.08334L17 15.0025L9.08083 7.08334L7.08333 9.08084L15.0025 17L7.08333 24.9192L9.08083 26.9167L17 18.9975L24.9192 26.9167L26.9167 24.9192L18.9975 17L26.9167 9.08084L24.9192 7.08334Z" fill="white"/>
    </svg>
  </S.Container>
);

export default CloseButton;