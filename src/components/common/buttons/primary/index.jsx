import React, { useCallback } from 'react';
import { useHistory } from 'react-router';

import * as S from './styles';

const Primary = ({ children, to, disabled, bgColor, onClickEvent }, ref) => {
  const history = useHistory();
  const defaultHandleOnClick = useCallback(() => history.push(to), [history, to]);
  const onClick = onClickEvent || defaultHandleOnClick;

  return (
    <S.Button type="button" onClick={onClick} disabled={disabled} ref={ref} bgColor={bgColor} >
      { children }
    </S.Button>
  );
};

export default React.forwardRef(Primary);