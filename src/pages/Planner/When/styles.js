import styled from 'styled-components';

import { Title, Container, Pill, Main } from 'styles/components';

const List = styled.ul`
  height: calc(100% - 250px);
  text-align: center;
  overflow: scroll;
  margin: 15px;
`;

const ListElementPill = styled.li`
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.primary};
  background-color: white;
  text-transform: capitalize;
  border-radius: 4px;
  justify-content: space-around;
  align-items: center;

  strong {
    flex-grow: 1;
  }
`;

const RedCross = styled.svg`
  margin-right: 0.5rem;
  background-color: #FE4A49;
  border-radius: 4px;
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
  height: 35%;

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
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-bottom: 2rem;
`;

export { Container, Title, Pill, List, ListElementPill, RedCross, CalendarPlaceholder, Main, ButtonsContainer };