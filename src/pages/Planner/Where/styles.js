import styled from 'styled-components';

import { Container, Title, Pill, Main } from 'styles/components';

const Input = styled.input`
  color: ${props => props.theme.colors.secondary};
  background-color: transparent;
  align-self: center;
  width: 85%;
  border: 0;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
  font-size: 1.4rem;
  margin-top: 1rem;

  &::placeholder {
    color: white;
    opacity: 0.5;
  }
`;

const Button = styled.button``;

const PlacesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 1rem;
  height: 75%;
  overflow: scroll;
`;

const PlacesPill = styled(Pill)`
  height: 140px;
  margin-bottom: 1rem;
  padding: 0;
  object-fit: cover;
  position: relative;
  border-radius: 4px;
  border: 0;
  width: 95%;
`;

const PillImage = styled.img`
  object-fit: cover;
  object-position: center 15%;
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

const PillTitle = styled.span`
  position: absolute;
  padding: 0.4rem 0.8rem;
  border-top-left-radius: 4px;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.primary};
  top: 0;
  left: 0;
  letter-spacing: 0.3px;
  font-size: 16px;
  font-style: oblique;
`;

const RedCross = styled.svg`
  background-color: #FE4A49;
  border-top-right-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-bottom: 2rem;
`;

export { Container, Title, Pill, Main, Input, Button, PlacesContainer, PlacesPill, PillTitle, PillImage, RedCross, ButtonsContainer };