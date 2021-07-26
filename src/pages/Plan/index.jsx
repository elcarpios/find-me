import React, { useRef, useEffect, useState } from 'react';
import Litepicker from 'litepicker';

import { StyledCalendarPlaceholder, StyledContainer, StyledList, StyledTitles, StyledListElementPill } from './styles';

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
      lang: 'es-ES',
      tooltipText: {
        one: 'dia',
        other: 'dias'
      },
      setup: picker => {
        picker.on('selected', (startDay, endDay) => {
          setDays(days => [{ startDay, endDay, counter}].concat(days));
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
      </StyledTitles>
      <StyledList>
        { days.map(day => <StyledListElementPill counter={day.counter} key={day.counter}>{parseDateToLocale(day.startDay)}{day.endDay ? ` - ${parseDateToLocale(day.endDay)}` : ''}</StyledListElementPill>) }
      </StyledList>
      <StyledCalendarPlaceholder ref={calendarRef}></StyledCalendarPlaceholder>
    </StyledContainer>
  );
};

export default Plan;