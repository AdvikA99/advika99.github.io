import React from 'react';
import './WeekView.css';
import { months } from '../../CalendarApp';
import WeekItem from './WeekItem/WeekItem';
import { Button, ButtonProps, styled, useTheme } from '@mui/material';
import { Box } from '@mui/system';

const dayHeaders = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function WeekView(props : any) {
  const theme = useTheme();

  const getDateOffset = (offset : number) => {
    if (offset === 0) {
      return props.curWeekStartDate;
    }
    return new Date(props.curWeekStartDate.getFullYear(), props.curWeekStartDate.getMonth(), props.curWeekStartDate.getDate() + offset);
  };

  const getHeader = () => {
    const curWeekEndDate = new Date(props.curWeekStartDate.getFullYear(), props.curWeekStartDate.getMonth(), props.curWeekStartDate.getDate() + 6);
    if (props.curWeekStartDate.getMonth() === curWeekEndDate.getMonth()) {
      return months[props.curWeekStartDate.getMonth()] + " " + props.curWeekStartDate.getFullYear();
    } else {
      return months[props.curWeekStartDate.getMonth()] + " " + props.curWeekStartDate.getFullYear() + " - " + months[curWeekEndDate.getMonth()] + " " + curWeekEndDate.getFullYear();
    }
  }

  const WeekSelectorButton = styled(Button)<ButtonProps>(() => ({
    fontSize: "1.4em",
    fontWeight: "bold",
    color: theme.palette.primary.contrastText,
    '&:hover': {
      color: theme.palette.secondary.light,
    }
  }));

  return (
    <Box id="weekViewSection" sx={{color: theme.palette.primary.contrastText}}>
      <div id="weekSelectorRow">
        <WeekSelectorButton className="weekSelectorButton" onClick={props.handlePreviousWeek}>ᐊ</WeekSelectorButton>
        <p id="currentMonthText">{getHeader()}</p>
        <WeekSelectorButton className="weekSelectorButton" onClick={props.handleNextWeek}>ᐅ</WeekSelectorButton>
      </div>

      {
        dayHeaders.map((day, index) => (
          <div className="weekRow" key={day}>
            <p className="weekDayHeader" style={{backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText}}>{day}</p>
            <WeekItem
              date={getDateOffset(index)}
              notes={props.notes} saveNewNote={props.saveNewNote} deleteNote={props.deleteNote}>
            </WeekItem>
          </div>
        ))
      }
    </Box>
  );
}

export default WeekView;
