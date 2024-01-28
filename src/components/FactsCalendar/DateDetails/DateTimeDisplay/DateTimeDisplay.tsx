import React, { useEffect, useState } from 'react';
import './DateTimeDisplay.css';
import { useTheme } from '@mui/material';

function getCurrentTimeText() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function getCurrentDateText() {
  const today = new Date();
  const month = today.toLocaleString('default', { month: 'long' });
  const dateSuffix = (today.getDate() === 1 || today.getDate() === 21 || today.getDate() === 31 ? "st" :
                        (today.getDate() === 2 || today.getDate() === 22 ? "nd" : 
                          (today.getDate() === 3 || today.getDate() === 23 ? "rd" : "th")));
  return `Today is ${month} ${today.getDate()}${dateSuffix}, ${today.getFullYear()}`;
}

function DateTimeDisplay() {
  const theme = useTheme();

  const [currentTime, setCurrentTime] = useState(getCurrentTimeText());
  const [currentDate, setCurrentDate] = useState(getCurrentDateText());
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTimeText());
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(getCurrentDateText());
    }, 60 * 1000); // Update every minute

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p id="timeDisplay" style={{color: theme.palette.primary.contrastText}}>{currentTime}</p>
      <p id="dateDisplay">{currentDate}</p>
    </div>
  );
}

export default DateTimeDisplay;
