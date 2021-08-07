import styled from 'styled-components';

import { Container, Title, Pill, Main } from 'styles/components';

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
  width: 82%;
  margin-top: 2rem;
  border: 0;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
  font-size: 1.5rem;

  &::placeholder {
    color: white;
    opacity: 0.6;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-bottom: 2rem;
`;

export { Container, Title, List, Input, Pill, ButtonsContainer, Main };