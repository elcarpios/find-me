import React, { useRef, useEffect, useState } from 'react';
import Litepicker from 'litepicker';

const Plan = () => {
  const [days, setDays] = useState([]);
  const [daysSelected, setDaysSelected] = useState(null);
  const [isSingleDay, setIsSingleDay] = useState(false);
  const [picker, setPicker] = useState(null);

  const startingDay = useRef(null);
  const endingDay = useRef(null);


  useEffect(() => {
    const pickerInstance = new Litepicker({
      element: startingDay.current,
      elementEnd: endingDay.current,
      singleMode: isSingleDay,
      startDate: new Date(),
      allowRepick: false,
      format: 'DD/MM/YYYY',
      lang: 'es-ES',
      tooltipText: {
        one: 'dia',
        other: 'dias'
      },
      setup: picker => {
        picker.on('selected', (startDay, endDay) => {
          setDaysSelected({ startDay, endDay});
        });
      }
    });

    pickerInstance.clearSelection();
    setPicker(pickerInstance);

    return () => {
      pickerInstance.destroy();
      setPicker(null);
    };
  }, [isSingleDay]);

  return (
    <div>
      <h3>Welcome to the planning zone ⚠️</h3>
      <form>
        <label>
          Is this a single day event? <input type="checkbox" onChange={event => setIsSingleDay(event.target.checked)}/>
        </label>
        <br /> <br />
          Choose the day(s): <input type="text" ref={startingDay} readOnly></input>
          { !isSingleDay && <input type="text" ref={endingDay} readOnly></input> }
        <br />
        { daysSelected && 
          <button type="button" onClick={event => {
            event.preventDefault();
            setDays(days => days.concat(daysSelected));
            picker.clearSelection();
            setDaysSelected(null);
          }}>
          Add
        </button>
        }
      </form>
      <ul>
        { days.map((day, index) => <li key={index}>{new Date(day.startDay.dateInstance).toDateString()}{day.endDay ? ` - ${new Date(day.endDay.dateInstance).toDateString()}` : ''}</li>) }
      </ul>
    </div>
  );
};

export default Plan;