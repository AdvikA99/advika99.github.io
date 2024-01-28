import React, { useState } from 'react';
import './MonthItem.css';
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

function MonthItem(props : any) {
  const theme = useTheme();

  const [openDateModal, setOpenDateModal] = useState(false);
  const handleOpen = () => setOpenDateModal(true);
  const handleClose = () => setOpenDateModal(false);

  const today = new Date();
  const itemDate = new Date(props.year, props.month, props.date);
  const isToday = today.getFullYear() === itemDate.getFullYear() && today.getMonth() === itemDate.getMonth() && today.getDate() === itemDate.getDate();

  const dateCode = getFormattedDate(itemDate);
  const characterLimit = 8;

  const itemsNotes = (props.notes as Note[]).filter((note) => note.date === dateCode);

  return (
    <div className="monthItemParent">
      <DateItemTooltip itemDate={itemDate} notes={props.notes} isDateModalOpen={openDateModal}>
        <Box 
          onClick={() => {
            handleOpen();
          }}
          className={"monthItem"} 
          sx={{color: (props.isPartOfMonth ? theme.palette.primary.contrastText : "rgb(150, 150, 150)"), backgroundColor: (isToday ? theme.palette.secondary.light : "transparent")}}>
          <p className="monthItemDay">{props.date}</p>
          {
            itemsNotes.slice(0, 3).map((note) => (
              <div className="monthItemNoteItem" key={note.id}>
                {note.type === NoteType.Misc && <NotesIcon className="monthItemNotesTypeIcon" sx={{fontSize: 16, color: lightBlue[500]}}/>}
                {note.type === NoteType.Reminder && <NotificationsActiveIcon className="monthItemNotesTypeIcon" sx={{fontSize: 16, color: green[500]}}/>}
                {note.type === NoteType.Birthday && <CakeIcon className="monthItemNotesTypeIcon" sx={{fontSize: 16, color: pink[500]}}/>}
                <p className="monthItemNotesText">{note.text.length > characterLimit ? `${note.text.slice(0, characterLimit)}...` : note.text}</p>
              </div>
            ))
          }
          {
            itemsNotes.length > 3 && (
              <p className="monthItemAdditionalNotesMessage">+{itemsNotes.length - 3} more...</p>
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

export default MonthItem;
