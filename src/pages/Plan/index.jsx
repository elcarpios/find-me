import React, { useRef, useEffect, useState } from 'react';
import Litepicker from 'litepicker';

const Plan = () => {
  const [isSingleDay, setIsSingleDay] = useState(false);
  const days = useRef(null);

  useEffect(() => {
    debugger;
    const picker = new Litepicker({
      element: days.current,
      singleMode: isSingleDay,
      startDate: new Date(),
      allowRepick: false,
      format: 'DD/MM/YYYY',
      lang: 'es-ES',
      tooltipText: {
        one: 'da',
        other: 'dias'
      },
    });

    picker.clearSelection();

    return () => {
      picker.destroy();
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
        <label>
          Choose the date: <input type="text" ref={days} readOnly></input>
        </label>
      </form>
    </div>
  );
};

export default Plan;