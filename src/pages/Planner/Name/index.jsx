import React, { useRef, useState } from 'react';

import PrimaryButton from 'components/common/buttons/primary';
import CloseButton from 'components/skeleton/CloseButton';

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
          { COOL_NAMES.length ? 'Randomize it' : 'Sorry we need to think more names' }
        </PrimaryButton>
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