import React, { useEffect, useState } from 'react';
import './CalendarApp.css';
import Calendar from './Calendar/Calendar';
import DateDetails from './DateDetails/DateDetails';
import { v4 as uuid } from 'uuid';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    yearColors: {
      color0A: string;
      color0B: string,
      color1A: string,
      color1B: string,
      color2A: string,
      color2B: string,
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    yearColors?: {
      color0A?: string;
      color0B?: string,
      color1A?: string,
      color1B?: string,
      color2A?: string,
      color2B?: string,
    };
  }
}

export enum NoteType {
  Add,
  Misc,
  Birthday,
  Reminder
}

export interface Note {
  date: string,
  id: string,
  type: NoteType,
  text: string
}

export function getFormattedDate(date : Date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // +1 as Months are zero-based
  const formattedDate = day + month + date.getFullYear();

  return formattedDate;
}

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function CalendarApp() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isDarkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem("notes") || '[]'));
  }, []);

  const saveNewNote = (noteDate : string, newNoteType : NoteType, noteText : string) => {
    const updatedNotes = [...notes, {date: noteDate, id: uuid(), type: newNoteType, text: noteText }];
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  }
  
  const deleteNote = (noteId : string) => {
    const updatedNotes = notes.filter((note: Note) => note.id !== noteId);

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  }

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  }

  const darkTheme = createTheme({
    palette: {
      primary: {
        light: "#222222",
        main: "#181818",
        dark: "#0a0a0a",
        contrastText: "#f0f0f0"
      },
      secondary: {
        light: "#204ab0",
        main: "#102f80",
        dark: "#202060",
        contrastText: "#f0f0f0"
      }
    },
    yearColors: {
      color0A: "#4040a0",
      color0B: "#1f1f4f",
      color1A: "#40a080",
      color1B: "#206040",
      color2A: "#8040a0",
      color2B: "#402060",
    }
  });

  const lightTheme = createTheme({
    palette: {
      primary: {
        light: "#ffeaca",
        main: "#efdfbf",
        dark: "#cfaf8f",
        contrastText: "#4f4f4f"
      },
      secondary: {
        light: "#f0f0f0",
        main: "#d0d0d0",
        dark: "#4f4f4f",
        contrastText: "#0f0f0f"
      }
    },
    yearColors: {
      color0A: "#60a0f0",
      color0B: "#80d0ff",
      color1A: "#40a080",
      color1B: "#80d0a0",
      color2A: "#a080d0",
      color2B: "#d0a0f0",
    }
  });

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div id="calendarApp">
        <Calendar notes={notes} saveNewNote={saveNewNote} deleteNote={deleteNote}></Calendar>
        <DateDetails notes={notes} saveNewNote={saveNewNote} deleteNote={deleteNote} darkMode={isDarkMode} toggleDarkMode={toggleDarkMode}></DateDetails>
      </div>
    </ThemeProvider>
  );
}

export default CalendarApp;
