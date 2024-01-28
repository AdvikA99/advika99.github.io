import React, { useEffect, useState } from 'react';
import './NotesView.css';
import NoteItem from './NoteItem/NoteItem';
import { Note, NoteType, getFormattedDate } from '../../CalendarApp';
import { useTheme } from '@mui/material';
import { Box } from '@mui/system';

function NotesView(props : any) {
  const theme = useTheme();

  const dateCode = getFormattedDate(new Date());

  return (
    <Box id="notesSection" sx={{backgroundColor: theme.palette.primary.main}}>
      <p className="notesHeader">Reminders and Notes</p>
      {
        (props.notes as Note[]).filter((note) => (note.date === dateCode)).map((note, index) => (
          <NoteItem
            key={note.id}
            noteDate={dateCode} 
            noteId={note.id} 
            noteType={note.type} 
            noteText={note.text}
            handleDelete={props.deleteNote}></NoteItem>
        ))
      }
      <NoteItem noteDate={dateCode} noteType={NoteType.Add} handleEnterPress={props.saveNewNote}></NoteItem>
    </Box>
  );
}

export default NotesView;
