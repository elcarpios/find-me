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
  overflow: auto;
`;

const PlacesPill = styled(Pill)`
  width: 90%;
  height: 120px;
  margin-bottom: 1rem;
  padding: 0;
  object-fit: cover;
  position: relative;
  border-radius: 0;
`;

const PillImage = styled.img`
  object-fit: cover;
  object-position: center 15%;
  width: 100%;
  height: 100%;
`;

const PillTitle = styled.span`
  position: absolute;
  padding: 0.5rem;
  border-radius: 2px;
  font-weight: bold;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.primary};
  bottom: 1rem;
  right: 1rem;
  letter-spacing: 0.3px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-bottom: 2rem;
`;

export { Container, Title, Pill, Main, Input, Button, PlacesContainer, PlacesPill, PillTitle, PillImage, ButtonsContainer };