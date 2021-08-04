import styled from 'styled-components';

import { Container, Title, Pill } from 'styles/components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Input = styled.input`
  color: ${props => props.theme.colors.secondary};
  background-color: transparent;
  align-self: center;
  width: 80vw;
  margin-top: 5rem;
  border: 0;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
  font-size: 1.5rem;

  &::placeholder {
    color: white;
    opacity: 0.5;
  }
`;

const ButtonsContainer = styled.div`
  position: fixed;
  bottom: 3rem;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export { Container, Title, List, Input, Pill, ButtonsContainer };