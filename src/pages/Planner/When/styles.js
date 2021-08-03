import styled from 'styled-components';

import { Title, Container, Pill } from 'styles/components';

const List = styled.ul`
  height: 38%;
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

  .container__footer { 
    margin: 15px 0;
    padding: 12px 10px;
    position: fixed;
    right: 0;
    bottom: 0;

    button[type=button] {
      padding: 0 1rem;
      min-height: 2rem;
      font-weight: bold;
    }
  }

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

export { Container, Title, Pill, List, ListElementPill, CalendarPlaceholder };