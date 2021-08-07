import React, { useState, useRef } from 'react';

import CloseButton from 'components/skeleton/CloseButton';
import PrimaryButton from 'components/common/buttons/primary';

import * as S from './styles';
import { ROUTES } from 'constants/routes';

// https://developers.google.com/maps/documentation/places/web-service/search?hl=es_419

const Where = () => {
  const inputRef = useRef(null);
  const [places, setPlaces] = useState([{ name: 'Barcelona', id: Math.random() }]);

  function addHandler(event) {
    const inputValue = inputRef.current?.value;

    event.preventDefault();
    
    if(inputValue) {
      setPlaces(places => places.concat({ name: inputValue, id: Math.random() }));
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
          placeholder="Place I want to go"
          ref={inputRef}
          onKeyPress={event => { if(event.code === 'Enter') addHandler(event); }}
        ></S.Input>
        <PrimaryButton
            bgColor="#2196f3"
            onClickEvent={addHandler}
          >
            Add this place
          </PrimaryButton>
        <S.PlacesContainer>
      { places.length > 0 &&
        places.map(place => 
          <S.PlacesPill key={place.id}>
            <S.PillImage src="https://picsum.photos/300/150" />
            <S.PillTitle>{place.name}</S.PillTitle>
            <S.RedCross width="28" height="28" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"
                onClick={
                  () => setPlaces(places => places.filter(innerPlace => place.id !== innerPlace.id))
                }>
                  <path d="M24.9192 7.08334L17 15.0025L9.08083 7.08334L7.08333 9.08084L15.0025 17L7.08333 24.9192L9.08083 26.9167L17 18.9975L24.9192 26.9167L26.9167 24.9192L18.9975 17L26.9167 9.08084L24.9192 7.08334Z" fill="white"/>
            </S.RedCross>
          </S.PlacesPill>
        )
      }
      </S.PlacesContainer>
      </S.Main>
      <S.ButtonsContainer>
      <PrimaryButton
        bgColor="#7251b5"
        to={ROUTES.home}
      >
        Finish
      </PrimaryButton>
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