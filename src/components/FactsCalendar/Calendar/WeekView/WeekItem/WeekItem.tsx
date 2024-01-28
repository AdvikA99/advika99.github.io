import React, { useState } from 'react';
import './WeekItem.css';
import { Note, NoteType, getFormattedDate } from '../../../CalendarApp';
import Modal from '@mui/material/Modal';
import DateItemTooltip from '../../DateItemTooltip/DateItemTooltip';
import DateModal from '../../DateModal/DateModal';
import NotesIcon from '@mui/icons-material/Notes';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CakeIcon from '@mui/icons-material/Cake';
import { lightBlue, green, pink } from '@mui/material/colors';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material';

function WeekItem(props : any) {
  const theme = useTheme();

  const [openDateModal, setOpenDateModal] = useState(false);
  const handleOpen = () => setOpenDateModal(true);
  const handleClose = () => setOpenDateModal(false);

  const today = new Date();
  const itemDate = props.date;
  const isToday = today.getFullYear() === itemDate.getFullYear() && today.getMonth() === itemDate.getMonth() && today.getDate() === itemDate.getDate();

  const dateCode = getFormattedDate(itemDate);
  const characterLimit = 100;

  const itemsNotes = (props.notes as Note[]).filter((note) => note.date === dateCode);

  return (
    <div className="weekItemParent">
      <DateItemTooltip itemDate={itemDate} notes={props.notes} isDateModalOpen={openDateModal}>
        <Box 
          onClick={() => {
            handleOpen();
          }}
          className="weekItem"
          sx={{backgroundColor: (isToday ? theme.palette.primary.dark : "transparent")}}>
          <p className="weekItemDay">{props.date.getDate()}</p>
          {
            itemsNotes.slice(0, 3).map((note) => (
              <div className="weekItemNoteItem" key={note.id}>
                {note.type === NoteType.Misc && <NotesIcon className="weekItemNotesTypeIcon" sx={{fontSize: 24, color: lightBlue[500]}}/>}
                {note.type === NoteType.Reminder && <NotificationsActiveIcon className="weekItemNotesTypeIcon" sx={{fontSize: 24, color: green[500]}}/>}
                {note.type === NoteType.Birthday && <CakeIcon className="weekItemNotesTypeIcon" sx={{fontSize: 24, color: pink[500]}}/>}
                <p className="weekItemNotesText">{note.text.length > characterLimit ? `${note.text.slice(0, characterLimit)}...` : note.text}</p>
              </div>
            ))
          }
          {
            itemsNotes.length > 3 && (
              <p className="weekItemAdditionalNotesMessage">+{itemsNotes.length - 3} more...</p>
            )
          }
        </Box>
      </DateItemTooltip>
      <Modal
        open={openDateModal}
        onClose={handleClose}>
          <div><DateModal date={itemDate} notes={props.notes} saveNewNote={props.saveNewNote} deleteNote={props.deleteNote}/></div>
      </Modal>
      
    </div>
  );
}

export default WeekItem;
