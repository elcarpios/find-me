import styled from 'styled-components';

import { Container, Title, Pill } from 'styles/components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
`;

const ListElement = styled(Pill)`
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.secondary};
  margin-bottom: 2rem;
  width: 50vw;
`;

export { Container, Title, List, ListElement, Pill };