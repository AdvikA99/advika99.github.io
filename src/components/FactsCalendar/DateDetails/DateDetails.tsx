import React, { useEffect, useState } from 'react';
import './DateDetails.css';
import FactDisplay from './FactDisplay/FactDisplay';
import DateTimeDisplay from './DateTimeDisplay/DateTimeDisplay';
import NotesView from './NotesView/NotesView';
import DateDetailsHeader from './DateDetailsHeader/DateDetailsHeader';
import { useTheme } from '@mui/material';
import { Box } from '@mui/system';

export interface FavoriteFact {
  factListKey: string,
  factInd: number,
}

function DateDetails(props : any) {
  const theme = useTheme();

  const [favoriteFacts, setFavoriteFacts] = useState<FavoriteFact[]>([]);

  useEffect(() => {
    setFavoriteFacts(JSON.parse(localStorage.getItem("favoriteFacts") || '[]'));
  }, []);

  return (
    <Box id="detailsSection" sx={{color: theme.palette.primary.contrastText, backgroundColor: theme.palette.primary.light}}>
      <DateDetailsHeader favoriteFacts={favoriteFacts} setFavoriteFacts={setFavoriteFacts} darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode}></DateDetailsHeader>
      <DateTimeDisplay></DateTimeDisplay>
      <FactDisplay favoriteFacts={favoriteFacts} setFavoriteFacts={setFavoriteFacts}></FactDisplay>
      <NotesView notes={props.notes} saveNewNote={props.saveNewNote} deleteNote={props.deleteNote}></NotesView>
    </Box>
  );
}

export default DateDetails;
