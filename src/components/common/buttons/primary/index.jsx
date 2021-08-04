import React, { useCallback } from 'react';
import { useHistory } from 'react-router';

import * as S from './styles';

const Primary = ({ children, to, disabled, bgColor }, ref) => {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push(to), [history, to]);

  return (
    <S.Button type="button" onClick={handleOnClick} disabled={disabled} ref={ref} bgColor={bgColor}>
      { children }
    </S.Button>
  );
};

export default React.forwardRef(Primary);