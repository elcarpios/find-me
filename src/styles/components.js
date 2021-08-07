import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  margin: 2rem 1.5rem 1rem 1.5rem;
  justify-content: space-between;
`;

const Pill = styled.div`
  display: inline-block;
  color: ${props => props.theme.colors.secondary};
  border: 1px solid ${props => props.theme.colors.secondary};
  padding: 0.25rem 1rem;
  border-radius: 4px;
  align-self: center;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  height: 100%;
`;

const Main = styled.main`
  flex-grow: 1;
  text-align: center;
  overflow: hidden;
`;

export { Title, Pill, Container, Main };