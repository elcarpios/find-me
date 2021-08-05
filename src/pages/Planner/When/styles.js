import styled from 'styled-components';

import { Title, Container, Pill } from 'styles/components';

const List = styled.ul`
  height: 25vh;
  text-align: center;
  overflow: auto;
  margin: 15px;
`;

const ListElementPill = styled.li`
  display: block;
  position: relative;
  padding: 10px;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.primary};
  background-color: white;
  text-transform: capitalize;

  span {
    position: absolute;
    right: 15px;
    bottom: 6px;
  }
`;

const CalendarPlaceholder = styled.div`
  --litepicker-month-width: 100%; 
  --litepicker-container-months-color-bg: transparent;
  --litepicker-container-months-box-shadow-color: transparent;
  --litepicker-footer-box-shadow-color: transparent;
  --litepicker-footer-color-bg: transparent;
  --litepicker-button-apply-color-bg: ${props => props.theme.colors.primary};
  --litepicker-button-next-month-color: ${props => props.theme.colors.primary};
  --litepicker-button-prev-month-color: ${props => props.theme.colors.primary};

  color: black;
  position: fixed:
  bottom: 20vh;

  .container__months {
    border-radius: 0;
    text-transform: capitalize;
    font-weight: 800;

    .month-item-header {
      font-size: 1rem;
    }

    .month-item .container__days > div, .container__days > a {
      flex-basis: 14%;
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  bottom: 2rem;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 15vh;
`;

export { Container, Title, Pill, List, ListElementPill, CalendarPlaceholder, ButtonsContainer };