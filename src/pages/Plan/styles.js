import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledTitles = styled.div`
  margin: 0 15px;
`;

export const StyledCalendarPlaceholder = styled.div`
  --litepicker-month-width: 100%;

  .container__footer { 
    margin: 0;
    padding: 12px 10px;
  }

  .container__months {
    border-radius: 0;

    .month-item {
      padding: 15px;
    } 
  }
`;

export const StyledList = styled.ul`
  flex-grow: 1;
  text-align: center;
  overflow: auto;
  margin: 15px;
`;

export const StyledListElementPill = styled.li`
  background-color: #${props => props.counter % 2 === 0 ? 'bcdef9' : 'e8e8e8'};

  list-style-type: none;
  display: block;
  padding: 10px;
  margin-bottom: 2px;
`;