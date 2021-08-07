import React, { useRef, useState } from 'react';

import PrimaryButton from 'components/common/buttons/primary';

import * as S from './styles';
import { ROUTES } from 'constants/routes';

const COOL_NAMES = [
  'The magic adventure 🛫',
  'Hangover in las Vegas',
  'Serendipia 2021 🦋',
  'Bunkers Carmel 2020',
  ''
];

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
        <h1>Name it</h1>
      </S.Title>
      <S.Main>
        <S.Input
          type="text"
          placeholder="Amazing plan name"
          ref={inputRef}
          onChange={onKeyHandler}
          onKeyPress={event => { 
            if(event.code === 'Enter' && inputValue.length) {
              buttonRef.current.click();
            }
          }}
        ></S.Input>
        <PrimaryButton
          border={false}
          bgColor="#2196f3"
          disabled={!COOL_NAMES.length}
          onClickEvent={() => {
            const index = Math.floor(Math.random() * (COOL_NAMES.length - 1));
            const [name] = COOL_NAMES.splice(index, 1);

            inputRef.current.value = name;
            setInputValue(name);
          }}
        >
          { COOL_NAMES.length ? 'Think for me' : 'Sorry our monkeys were not so original' }
        </PrimaryButton>
      </S.Main>
      <S.ButtonsContainer>
        <PrimaryButton
          to={ROUTES.planner.when}
          disabled={!inputValue.length}
          ref={buttonRef}
        >
          Let&apos;s go
        </PrimaryButton>
        <PrimaryButton
        bgColor="#FE4A49"
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