import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const calculateTimeLeft = (endTime) => {
  const difference = endTime - new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      timeEnd: false,
    };
  } else {
    timeLeft = { timeEnd: true };
  }
  return timeLeft;
};

const StyledTimer = styled('section')(({ theme }) => ({
  // Your existing styles
}));

export default function Timer2({ endTime, update }) {
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(new Date(endTime))
  );

  useEffect(() => {
    let timer = null;
    if (!timeLeft.timeEnd) {
      timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft(endTime));
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [endTime, timeLeft.timeEnd]);

  useEffect(() => {
    if (timeLeft.timeEnd) {
      update();
    }
  }, [timeLeft.timeEnd, update]);

  const formatTimeValue = (value) => {
    return value.toString().padStart(2, '0');
  };

  return (
    <StyledTimer className={`timer ${timeLeft.seconds !== 0 ? 'timer-ticking' : ''}`}>
      {!timeLeft.timeEnd ? (
        <>
          <ul className="parts">
            <li className="part">
              <p className="number">{timeLeft.days !== 0 && `${formatTimeValue(timeLeft.days)}`}</p>
              <p className="unit">Days</p>
            </li>
            <li className="colon">:</li>
            <li className="part">
              <p className="number">{timeLeft.hours !== 0 && `${formatTimeValue(timeLeft.hours)}`}</p>
              <p className="unit">Hours</p>
            </li>
            <li className="colon">:</li>
            <li className="part">
              <p className="number"> {timeLeft.minutes !== 0 && `${formatTimeValue(timeLeft.minutes)}`}</p>
              <p className="unit">Minutes</p>
            </li>
            <li className="colon">:</li>
            <li className="part">
              <p className="number"> {`${formatTimeValue(timeLeft.seconds)}`}</p>
              <p className="unit">Seconds</p>
            </li>
          </ul>
        </>
      ) : (
        <Typography component="p" variant="h3">
          Registration ended
        </Typography>
      )}
    </StyledTimer>
  );
}
