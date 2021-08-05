import React, { useState, useRef } from 'react';

import CloseButton from 'components/skeleton/CloseButton';
import PrimaryButton from 'components/common/buttons/primary';

import * as S from './styles';
import { ROUTES } from 'constants/routes';

// https://developers.google.com/maps/documentation/places/web-service/search?hl=es_419

const Where = () => {
  const inputRef = useRef(null);
  const [places, setPlaces] = useState(['Barcelona']);

  function addHandler(event) {
    const inputValue = inputRef.current?.value;

    event.preventDefault();
    
    if(inputValue) {
      setPlaces(places => places.concat(inputValue));
      inputRef.current.value = '';
    }
  }

  return (
    <>
    <S.Container>
      <S.Title>
        <h1>Where</h1>
        <CloseButton />
      </S.Title>
      <S.Main>
        <S.Input
          type="text"
          placeholder="Write here your places"
          ref={inputRef}
          onKeyPress={event => { if(event.code === 'Enter') addHandler(event); }}
          autoFocus
        ></S.Input>
        <PrimaryButton
            bgColor="#2196f3"
            onClickEvent={addHandler}
          >
            Add
          </PrimaryButton>
        <S.PlacesContainer>
      { places.length > 0 &&
        places.map((place, index) => 
          <S.PlacesPill key={index}>
            <S.PillImage src="https://picsum.photos/300/150" />
            <S.PillTitle>{place}</S.PillTitle>
          </S.PlacesPill>
        )
      }
      </S.PlacesContainer>
      </S.Main>
      <S.ButtonsContainer>
      <PrimaryButton
        bgColor="#FE4A49"
        to={ROUTES.planner.when}
      >
        Back
      </PrimaryButton>
    </S.ButtonsContainer>
    </S.Container>
  </>
  );
};

export default Where;