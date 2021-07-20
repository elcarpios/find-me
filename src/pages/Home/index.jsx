import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.svg';

const StyledLink = styled(Link)`
  display: inline-block;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 10px 1em;
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

const StyledAnchor = StyledLink.withComponent('a');

const Home = () => {
  return (
  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Container>
        <StyledLink to="/plan">Let&#39;s get ready with the plan</StyledLink>
        <br />
        <StyledAnchor href="https://github.com/elcarpios/find-me">
          Show me the magic! ✨ 
        </StyledAnchor>
      </Container>
    </div>
  );
};

export default Home;