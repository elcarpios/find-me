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

          setDays(days => days.concat({ startDay, endDay, id: Math.random() }));
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
          <h1>When</h1>
          <CloseButton />
        </S.Title>
        <S.Main>
          <S.List>
            { days.map(day => 
              <S.ListElementPill id={day.id} key={day.id}>
                <strong>{parseDateToLocale(day.startDay)}{day.endDay ? ` - ${parseDateToLocale(day.endDay)}` : ''}</strong>
                <S.RedCross width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"
                onClick={
                  () => setDays(days => days.filter(innerDay => day.id !== innerDay.id))
                }>
                  <path d="M24.9192 7.08334L17 15.0025L9.08083 7.08334L7.08333 9.08084L15.0025 17L7.08333 24.9192L9.08083 26.9167L17 18.9975L24.9192 26.9167L26.9167 24.9192L18.9975 17L26.9167 9.08084L24.9192 7.08334Z" fill="white"/>
              </S.RedCross>
              </S.ListElementPill>) }
          </S.List>
          <strong>You can add multiple values</strong>
          <S.CalendarPlaceholder ref={calendarRef}></S.CalendarPlaceholder>
        </S.Main>
        <S.ButtonsContainer>
          <PrimaryButton
              to={ROUTES.planner.where}
              disabled={days.length < 1}
            >
              Move forward
          </PrimaryButton>
          <PrimaryButton
            bgColor="#FE4A49"
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