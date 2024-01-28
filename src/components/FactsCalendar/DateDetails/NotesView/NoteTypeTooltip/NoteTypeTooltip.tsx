import React, { useEffect, useState } from 'react';
import './NoteTypeTooltip.css';
import { NoteType } from '../../../CalendarApp';
import { Tooltip, TooltipProps, tooltipClasses, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import NotesIcon from '@mui/icons-material/Notes';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CakeIcon from '@mui/icons-material/Cake';
import { lightBlue, green, pink } from '@mui/material/colors';

const getNoteTypeName = (noteType : NoteType) => {
  switch (noteType) {
    case NoteType.Birthday:
      return "Birthday";
    case NoteType.Misc:
      return "Note";
    case NoteType.Reminder:
      return "Reminder";
    default:
      return "ERROR UNKNOWN NOTE TYPE";
  }
}


function NoteTypeTooltip(props: any) {
  const theme = useTheme();

  const CustomStyledTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.secondary.dark
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.secondary.dark
    },
  }));

  return (
    <CustomStyledTooltip enterDelay={0} arrow placement="top" title={
      <div>
        <p id="noteTypeTooltipName">{getNoteTypeName(props.selectedNoteType)}</p>
        <div id="noteTypeTooltipSelectionRow">
          <NotesIcon 
            className={"notesTypeTooltipIcon" + (props.selectedNoteType === NoteType.Misc ? " selectedNoteType" : "")} 
            sx={{fontSize: 24, color: lightBlue[500]}}
            onClick={() => props.onSelectionChange(NoteType.Misc)}/>
          <NotificationsActiveIcon 
            className={"notesTypeTooltipIcon" + (props.selectedNoteType === NoteType.Reminder ? " selectedNoteType" : "")} 
            sx={{fontSize: 24, color: green[500]}}
            onClick={() => props.onSelectionChange(NoteType.Reminder)}/>
          <CakeIcon 
            className={"notesTypeTooltipIcon" + (props.selectedNoteType === NoteType.Birthday ? " selectedNoteType" : "")} 
            sx={{fontSize: 24, color: pink[500]}}
            onClick={() => props.onSelectionChange(NoteType.Birthday)}/>
        </div>
      </div>
    }>
      {props.children}
    </CustomStyledTooltip>
  );
}

export default NoteTypeTooltip;
