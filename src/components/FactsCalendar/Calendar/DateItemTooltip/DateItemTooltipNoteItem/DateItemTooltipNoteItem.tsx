import React, { useState, useRef, useEffect } from 'react';
import './DateItemTooltipNoteItem.css';
import { NoteType } from '../../../CalendarApp';
import NotesIcon from '@mui/icons-material/Notes';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CakeIcon from '@mui/icons-material/Cake';
import { lightBlue, green, pink } from '@mui/material/colors';

function DateItemTooltipNoteItem(props : any) {
  
  const characterLimit = 50;

  return (
    <div className="dateItemTooltipNoteItem">
      {props.noteType === NoteType.Misc && <NotesIcon className="dateItemTooltipNotesTypeIcon" sx={{fontSize: 20, color: lightBlue[500]}}/>}
      {props.noteType === NoteType.Reminder && <NotificationsActiveIcon className="dateItemTooltipNotesTypeIcon" sx={{fontSize: 20, color: green[500]}}/>}
      {props.noteType === NoteType.Birthday && <CakeIcon className="dateItemTooltipNotesTypeIcon" sx={{fontSize: 20, color: pink[500]}}/>}
      <p className="dateItemTooltipNotesText">{props.noteText.length > characterLimit ? `${props.noteText.slice(0, characterLimit)}...` : props.noteText}</p>
    </div>
  );
}

export default DateItemTooltipNoteItem;
