import React, { useState } from 'react';
import './Calendar.css';
import TimeScaleSelector from './TimeScaleSelector/TimeScaleSelector';
import YearView from './YearView/YearView';
import MonthView from './MonthsView/MonthView';
import WeekView from './WeekView/WeekView';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/system/Box';

export enum TimeScale {
  Year,
  Month,
  Week
}

const getInitWeekStartDate = () => {
  const today = new Date();
  const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
  return startDate;
}

function Calendar(props: any) {
  const theme = useTheme();
  
  const [timeScale, setTimeScale] = useState(TimeScale.Year);
  const [curWeekStartDate, setCurWeekStartDate] = useState(getInitWeekStartDate())
  const [curMonth, setCurMonth] = useState(new Date().getMonth());
  const [curYear, setCurYear] = useState(new Date().getFullYear());

  const handleTimeScaleChange = (newTimeScale : TimeScale) => {
    setTimeScale(newTimeScale);
  };

  const handlePreviousMonth = () => {
    let newMonth = curMonth - 1;
    if (newMonth < 0) {
      newMonth = 11;
      setCurYear(curYear - 1);
    }
    setCurMonth(newMonth);
  }

  const handleNextMonth = () => {
    let newMonth = curMonth + 1;
    if (newMonth > 11) {
      newMonth = 0;
      setCurYear(curYear + 1);
    }
    setCurMonth(newMonth);
  }

  const handlePreviousWeek = () => {
    const newStartWeekDate = new Date(curWeekStartDate.getFullYear(), curWeekStartDate.getMonth(), curWeekStartDate.getDate() - 7);
    setCurWeekStartDate(newStartWeekDate);
  }

  const handleNextWeek = () => {
    const newStartWeekDate = new Date(curWeekStartDate.getFullYear(), curWeekStartDate.getMonth(), curWeekStartDate.getDate() + 7);
    setCurWeekStartDate(newStartWeekDate);
  }

  return (
    <Box id="calendarSection" sx={{backgroundColor: theme.palette.primary.main}}>
      <TimeScaleSelector curTimeScale={timeScale} onTimeScaleChange={handleTimeScaleChange}></TimeScaleSelector>
        {timeScale === TimeScale.Year && 
          <YearView notes={props.notes} saveNewNote={props.saveNewNote} deleteNote={props.deleteNote}/>}
        {timeScale === TimeScale.Month && 
          <MonthView 
            curYear={curYear}
            curMonth={curMonth} 
            handlePreviousMonth={handlePreviousMonth} 
            handleNextMonth={handleNextMonth}
            notes={props.notes} saveNewNote={props.saveNewNote} deleteNote={props.deleteNote}/>}
        {timeScale === TimeScale.Week && 
          <WeekView
            curWeekStartDate={curWeekStartDate}
            handlePreviousWeek={handlePreviousWeek} 
            handleNextWeek={handleNextWeek}
            notes={props.notes} saveNewNote={props.saveNewNote} deleteNote={props.deleteNote}/>}
    </Box>
  );
}

export default Calendar;
