import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Subheading = styled('div')(({ theme }) => ({
  margin: '16px',
  color: theme.palette.openTitle,
}));

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
    <Subheading>
      {!timeLeft.timeEnd ? (
        <Typography variant="h3" color="Green" >
          
          {timeLeft.days !== 0 && `${formatTimeValue(timeLeft.days)} Days `}
          
          {timeLeft.hours !== 0 && `${formatTimeValue(timeLeft.hours)} Hours `}
          <br></br>
          {timeLeft.minutes !== 0 && `${formatTimeValue(timeLeft.minutes)} Minutes `}
          <br></br>
          {`${formatTimeValue(timeLeft.seconds)} Seconds`}
        </Typography>
      ) : (
        <Typography component="p" variant="h3">
          Registration ended
        </Typography>
      )}
    </Subheading>
  );
}