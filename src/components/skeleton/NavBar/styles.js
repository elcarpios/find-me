import styled from 'styled-components';

const NavBar = styled.nav`
  background-color: transparent;
  text-align: center;
  flex-shrink: 0;
  display: flex;
  justify-content: space-evenly;
  min-height: 85px;
  align-items: center;
  color: ${props => props.theme.colors.primary}
`;

export { NavBar };