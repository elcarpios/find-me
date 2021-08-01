import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items:center;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

const Loader = styled.div`
  display: flex;
	align-items: center;
	height: 37px;
	padding-top: 15px;
	text-align: center;
	justify-content: center;
	margin: 0px auto;

  @keyframes bouncer {
    100% {
      transform: scale(1.75) translateY(-20px);
    }
  }

  div {
    display: inline-block;
    height: 10px;
    width: 10px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;
    margin: 37px 10px 10px;
    animation: 0.75s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite
    alternate none running bouncer;
  }

  div:nth-child(5n + 1) {
    background-color: white;
  }
  div:nth-child(5n + 2) {
    animation-delay: calc(0.1s);
    background-color: white;
  }
  div:nth-child(5n + 3) {
    animation-delay: calc(0.2s);
    background-color: white;
  }
  div:nth-child(5n + 4) {
    animation-delay: calc(0.2s);
    background-color: white;
  }
  div:nth-child(5n + 5) {
    animation-delay: calc(0.4s);
    background-color: white;
  }
`;

export { Container, Loader };