import React, { useState } from 'react';
import './DateModal.css';
import { Note, getFormattedDate } from '../../CalendarApp';
import DateModalNoteItem from './DateModalNoteItem/DateModalNoteItem';
import DateModalAddNoteItem from './DateModalAddNoteItem/DateModalAddNoteItem';
import { useTheme } from '@mui/material';
import { Box } from '@mui/system';

function DateModal(props: any) {
  const theme = useTheme();

  const date = props.date;
  const month = date.toLocaleString('default', { month: 'long' });
  const dateSuffix = (date.getDate() === 1 || date.getDate() === 21 || date.getDate() === 31 ? "st" :
                        (date.getDate() === 2 || date.getDate() === 22 ? "nd" : 
                          (date.getDate() === 3 || date.getDate() === 23 ? "rd" : "th")));

  const dateCode = getFormattedDate(date);

  return (
    <Box id="dateModal" sx={{backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText}}>
      <p id="dateModalHeader">{month} {date.getDate() + dateSuffix}</p>
      <p id="dateModalSubheader">Reminders and Notes</p>
      {
        (props.notes as Note[]).filter((note) => (note.date === dateCode)).map((note, index) => (
          <DateModalNoteItem
            key={note.id}
            noteDate={dateCode} 
            noteId={note.id} 
            noteType={note.type} 
            noteText={note.text}
            deleteNote={props.deleteNote}/>
        ))
      }
      <DateModalAddNoteItem noteDate={dateCode} handleEnterPress={props.saveNewNote}/>
    </Box>
  );
}

export default DateModal;
