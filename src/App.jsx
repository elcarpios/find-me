import React, { useState } from 'react';
import logo from 'assets/logo.svg';
import styled, { css } from 'styled-components';
import 'styles/App.css';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      color: ${props.theme.colors.primary};
      background: palevioletred;
    `}
`;
const Container = styled.div`
  text-align: center;
`;

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Container>
        <Button type="button" onClick={() => setCount((count) => count + 1)}>
          How much we rule: {count}
        </Button>
        <Button
          primary
          onClick={() => {
            window.location = 'https://github.com/elcarpios/find-me';
          }}
        >
          Primary Button!
        </Button>
      </Container>
    </div>
  );
};

export default { App };

