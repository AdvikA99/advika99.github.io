import React from 'react';
import './TimeScaleSelector.css';
import { TimeScale } from '../Calendar';
import { useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

function TimeScaleSelector(props : any) {
  const theme = useTheme();

  const handleTimeScaleClick = (newTimeScale : TimeScale) => {
    props.onTimeScaleChange(newTimeScale);
  };

  const YearTimeSelectorButton = styled(Button)<ButtonProps>(() => ({
    color: theme.palette.secondary.contrastText,
    backgroundColor: props.curTimeScale === TimeScale.Year ? theme.palette.secondary.main : "transparent",
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    }
  }));

  const MonthTimeSelectorButton = styled(Button)<ButtonProps>(() => ({
    color: theme.palette.secondary.contrastText,
    backgroundColor: props.curTimeScale === TimeScale.Month ? theme.palette.secondary.main : "transparent",
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    }
  }));

  const WeekTimeSelectorButton = styled(Button)<ButtonProps>(() => ({
    color: theme.palette.secondary.contrastText,
    backgroundColor: props.curTimeScale === TimeScale.Week ? theme.palette.secondary.main : "transparent",
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    }
  }));


  return (
    <div id="timeSelectorRow">
      <div id="timeSelectorButtonsContainer" style={{borderColor: theme.palette.primary.contrastText}}>
        <YearTimeSelectorButton className="timeSelectorButton"
          onClick={() => handleTimeScaleClick(TimeScale.Year)}>Year</YearTimeSelectorButton>
        <MonthTimeSelectorButton className="timeSelectorButton"
          onClick={() => handleTimeScaleClick(TimeScale.Month)}>Month</MonthTimeSelectorButton>
        <WeekTimeSelectorButton className="timeSelectorButton"
          onClick={() => handleTimeScaleClick(TimeScale.Week)}>Week</WeekTimeSelectorButton>
      </div>
    </div>
  );
}

export default TimeScaleSelector;
