import React, { useRef, useEffect, useState } from 'react';
import Litepicker from 'litepicker';

import CloseButton from 'components/skeleton/CloseButton';
import PrimaryButton from 'components/common/buttons/primary';

import * as S from './styles';
import { ROUTES } from 'constants/routes';

const parseDateToLocale = date => date.toLocaleString('en-EN', { weekday: 'short', month: 'long', day: 'numeric' });

const When = ({ location }) => {
  const [days, setDays] = useState([]);
  const calendarRef = useRef(null);
  const singleMode = location.state?.singleMode;

  useEffect(() => {
    let counter = 0;
    const pickerInstance = new Litepicker({
      element: calendarRef.current,
      singleMode: false,
      startDate: new Date(),
      allowRepick: true,
      inlineMode: true,
      resetButton: false,
      autoApply: true,
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
          if(startDay.getTime() === endDay.getTime()) {
            endDay = undefined;
          }

          setDays(days => days.concat({ startDay, endDay, counter }));
          counter++;
        });
      }
    });

    pickerInstance.clearSelection();

    return () => pickerInstance.destroy();
  }, [singleMode]);

  return (
    <>
      <S.Container>
        <S.Title>
          <h1>Which days?</h1>
          <CloseButton />
        </S.Title>
        <S.Main>
          <S.List>
            { days.map(day => 
              <S.ListElementPill counter={day.counter} key={day.counter}>
                <strong>{parseDateToLocale(day.startDay)}{day.endDay ? ` - ${parseDateToLocale(day.endDay)}` : ''}</strong>
                <span onClick={
                  () => setDays(days => days.filter(innerDay => day.counter !== innerDay.counter))
                }>❌</span>
              </S.ListElementPill>) }
          </S.List>
          <S.CalendarPlaceholder ref={calendarRef}></S.CalendarPlaceholder>
        </S.Main>
        <S.ButtonsContainer>
          <PrimaryButton
              to={ROUTES.planner.where}
              disabled={days.length < 1}
            >
              Continue
          </PrimaryButton>
          <PrimaryButton
            bgColor="#2196f3"
            to={ROUTES.planner.name}
          >
            Back
          </PrimaryButton>
        </S.ButtonsContainer>
      </S.Container>
    </>
  );
};

export default When;