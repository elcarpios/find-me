import styled from 'styled-components';

import { Container, Title, Pill, Main } from 'styles/components';

const InputContainer = styled.div`
  display: flex;
  margin: 0 1rem;
`;

const Input = styled.input`
  flex-grow: 1;
  margin-right: 0.5rem;
`;

const Button = styled.button``;

const PlacesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1.5rem 1rem;
`;

const PlacesPill = styled(Pill)`
  flex-basis: 35vw;
  margin-bottom: 1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-bottom: 2rem;
`;

export { Container, Title, Pill, InputContainer, Main, Input, Button, PlacesContainer, PlacesPill, ButtonsContainer };