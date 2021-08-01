import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Litepicker from 'litepicker';

import * as S from './styles';
import { ROUTES } from 'constants/routes';

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
        cancel: 'Clear'
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

    return () => pickerInstance.destroy();
  }, []);

  return (
    <S.Container>
      <S.Title>
        <h1>Which days?</h1>
        <S.Button type="button">
          <Link to={ROUTES.home}>Back</Link>
        </S.Button>
      </S.Title>
      <S.List>
        { days.map(day => 
          <S.ListElementPill counter={day.counter} key={day.counter}>
            <strong>{parseDateToLocale(day.startDay)}{day.endDay ? ` - ${parseDateToLocale(day.endDay)}` : ''}</strong>
            <span onClick={
              () => setDays(days => days.filter(innerDay => day.counter !== innerDay.counter))
            }>❌</span>
          </S.ListElementPill>) }
      </S.List>
      <S.Button disabled={!days.length}>
      {
        days.length > 0 ? <Link to={ROUTES.home}>Continue</Link> : 'Add some days'
      }
      </S.Button>
      <S.CalendarPlaceholder ref={calendarRef}></S.CalendarPlaceholder>
    </S.Container>
  );
};

export default Plan;