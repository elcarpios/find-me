import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  margin: 2rem;
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
  justify-content: space-between;
`;

const Main = styled.main`
  height: 60%;
  text-align: center;
`;

export { Title, Pill, Container, Main };