import React, { useRef, useState, useEffect } from 'react';
import '../../variable.css'
const CountdownTimer = ({ targetHours }) => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
        ":" +
        (minutes > 9 ? minutes : "0" + minutes) +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer(formatTime(targetHours * 60 * 60)); // Format time for target hours

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + targetHours * 60 * 60); // Adjust for target hours
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, [targetHours]); // Update when targetHours changes

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  const formatTime = (seconds) => {
    const formattedHours = Math.floor(seconds / 3600);
    const formattedMinutes = Math.floor((seconds % 3600) / 60);
    const formattedSeconds = seconds % 60;
    return (
      (formattedHours > 9 ? formattedHours : "0" + formattedHours) +
      ":" +
      (formattedMinutes > 9 ? formattedMinutes : "0" + formattedMinutes) +
      ":" +
      (formattedSeconds > 9 ? formattedSeconds : "0" + formattedSeconds)
    );
  };

  return (
    <div className='flex justify-content-center'>
      <h2 className='bg-red text-align-center pd-8 w-50'>{timer}</h2>
    </div>
  );
};

export default CountdownTimer;


