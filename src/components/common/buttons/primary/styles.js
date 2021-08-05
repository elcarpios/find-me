import styled from 'styled-components';

const Button = styled.button`
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.bgColor || props.theme.colors.primary};
  border: ${props => props.border ? `1px solid ${props.theme.colors.secondary}` : 'none'};
  padding: 0.5rem 0;
  font-size: 1rem;
  margin-top: 1rem;
  width: 85%;

  &:disabled {
    background-color: lightgrey;
  }
`;

export { Button };