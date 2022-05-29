import React, { useState, useEffect } from 'react';

function WhatsTheTime() {
  const [times, setTimes] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (times.hours)
      setTimes({
        hours: times.hours,
        minutes: times.hours * 60,
        seconds: times.hours * 60 * 60,
      });
    else if (times.minutes)
      setTimes({
        hours: times.minutes / 60,
        minutes: times.minutes,
        seconds: times.minutes / 60 / 60,
      });
    else
      setTimes({
        hours: times.seconds / 60 / 60,
        minutes: times.seconds / 60,
        seconds: times.seconds,
      });
  }, [times.hours, times.minutes, times.seconds]);

  function handleChange(e) {
    const input = e.target;
    setTimes({ [input.name]: input.value });
  }

  return (
    <div>
      <label htmlFor='hours'>Hours: </label>
      <input
        type='text'
        name='hours'
        value={times.hours ?? ''}
        onChange={handleChange}
      />
      <br />
      <label htmlFor='minutes'>Minutes: </label>
      <input
        type='text'
        name='minutes'
        value={times.minutes ?? ''}
        onChange={handleChange}
      />
      <br />
      <label htmlFor='seconds'>Seconds: </label>
      <input
        type='text'
        name='seconds'
        value={times.seconds ?? ''}
        onChange={handleChange}
      />
    </div>
  );
}

export default WhatsTheTime;
