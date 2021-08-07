import styled from 'styled-components';

const Button = styled.button`
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.bgColor || '#2196f3'};
  border: 0;
  padding: 0.5rem 0;
  font-size: 1rem;
  margin-top: 1rem;
  width: 85%;
  border-radius: 4px;

  &:disabled {
    background-color: lightgrey;
  }
`;

export { Button };