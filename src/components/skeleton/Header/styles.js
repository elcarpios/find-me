import styled from 'styled-components';

const HEIGHT = '90px';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-height: ${HEIGHT};
`;

const H3 = styled.h3`
  display: inline-block;
  color: ${props => props.theme.colors.secondary};
  border: 1px solid ${props => props.theme.colors.secondary};
  padding: 5px 25px;
  border-radius: 4px;
`;

export { Header, H3 };