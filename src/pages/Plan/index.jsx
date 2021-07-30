import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Litepicker from 'litepicker';

import { ROUTES } from 'constants/routes';
import { StyledButton, StyledCalendarPlaceholder, StyledContainer, StyledList, StyledTitles, StyledListElementPill } from './styles';

const parseDateToLocale = date => date.toLocaleString('es-ES', { weekday: 'short', month: 'long', day: 'numeric' });

const Plan = () => {
  const [days, setDays] = useState([]);
  const calendarRef = useRef(null);

  useEffect(() => {
    let counter = 0;
    const pickerInstance = new Litepicker({
      element: calendarRef.current,
      singleMode: false,
      startDate: new Date(),
      allowRepick: true,
      inlineMode: true,
      resetButton: false,
      autoApply: false,
      format: 'DD/MM/YYYY',
      lang: 'en-EN',
      tooltipText: {
        one: 'day',
        other: 'days'
      },
      buttonText: {
        apply: 'Add',
        cancel: 'Remove'
      },
      setup: picker => {
        picker.on('selected', (startDay, endDay) => {
          setDays(days => days.concat({ startDay, endDay, counter }));
          picker.clearSelection();
          counter++;
        });
      }
    });

    pickerInstance.clearSelection();

    return pickerInstance.destroy;
  }, []);

  return (
    <StyledContainer>
      <StyledTitles>
        <h1>Which days?</h1>
        <StyledButton type="button">
          <Link to={ROUTES.home}>Back</Link>
        </StyledButton>
      </StyledTitles>
      <StyledList>
        { days.map(day => 
          <StyledListElementPill counter={day.counter} key={day.counter}>
            <strong>{parseDateToLocale(day.startDay)}{day.endDay ? ` - ${parseDateToLocale(day.endDay)}` : ''}</strong>
            <span onClick={
              () => setDays(days => days.filter(innerDay => day.counter !== innerDay.counter))
            }>❌</span>
          </StyledListElementPill>) }
      </StyledList>
      <StyledButton disabled={!days.length}>
      {
        days.length > 0 ? <Link to={ROUTES.home}>Continue</Link> : 'Add some days'
      }
      </StyledButton>
      <StyledCalendarPlaceholder ref={calendarRef}></StyledCalendarPlaceholder>
    </StyledContainer>
  );
};

export default Plan;