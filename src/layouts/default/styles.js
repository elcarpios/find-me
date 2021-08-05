import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  width: 100%;
  background: ${props => props.theme.backgrounds.primary};
`;

const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
`;

export { Layout, Main };