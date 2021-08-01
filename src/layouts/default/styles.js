import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  flex-wrap: nowrap;
  background: linear-gradient(180deg, #00AA9B 0%, rgba(0, 170, 155, 0) 90%);
`;

const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
`;

export { Layout, Main };