import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';
import { ROUTES } from 'constants/routes';
// https://developers.google.com/maps/documentation/places/web-service/search?hl=es_419

const Where = () => {
  const inputRef = useRef(null);
  const [places, setPlaces] = useState(['Japón', 'Barcelona']);

  function addHandler(event) {
    const inputValue = inputRef.current?.value;

    event.preventDefault();
    
    if(inputValue) {
      setPlaces(places => places.concat(inputValue));
      inputRef.current.value = '';
    }
  }

  return (
    <S.Container>
      <S.Title>
        <h1>Where</h1>
        <S.Pill as={Link} to={ROUTES.planner.when}>Back</S.Pill>
      </S.Title>
      <S.InputContainer>
        <S.Input
          type="text"
          placeholder="Write here your places"
          ref={inputRef}
          onKeyPress={event => { if(event.code === 'Enter') addHandler(event); }}
          autoFocus
        ></S.Input>
        <S.Button
          type="button"
          onClick={addHandler}  
        >Add 🔥 </S.Button>
      </S.InputContainer>
      <S.PlacesContainer>
      { places.length > 0 &&
        places.map((place, index) => 
          <S.PlacesPill key={index}>{place}</S.PlacesPill>
        )
      }
      </S.PlacesContainer>
    </S.Container>
  );
};

export default Where;