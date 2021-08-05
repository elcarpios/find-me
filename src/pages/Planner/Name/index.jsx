import React, { useRef, useState } from 'react';

import PrimaryButton from 'components/common/buttons/primary';
import CloseButton from 'components/skeleton/CloseButton';

import * as S from './styles';
import { ROUTES } from 'constants/routes';

const Name = () => {
  const inputRef = useRef(null);
  const buttonRef = useRef(PrimaryButton);

  const [inputValue, setInputValue] = useState('');

  function onKeyHandler({ target }) {
    setInputValue(target.value);
  }

  return (
    <>
    <S.Container>
      <S.Title>
        <h1>Choose a cool event name</h1>
        <CloseButton />
      </S.Title>
      <S.Main>
        <S.Input
          type="text"
          placeholder="Cool event name ✨"  
          ref={inputRef}
          onChange={onKeyHandler}
          onKeyPress={event => { 
            if(event.code === 'Enter' && inputValue.length) {
              buttonRef.current.click();
            }
          }}
          autoFocus
        ></S.Input>
      </S.Main>
      <S.ButtonsContainer>
        <PrimaryButton
          to={ROUTES.planner.when}
          disabled={!inputValue.length}
          ref={buttonRef}
        >
          Continue
        </PrimaryButton>
        <PrimaryButton
        bgColor="#2196f3"
        to={ROUTES.home}
      >
        Back
      </PrimaryButton>
      </S.ButtonsContainer>
    </S.Container>
  </>
  );
};

export default Name;