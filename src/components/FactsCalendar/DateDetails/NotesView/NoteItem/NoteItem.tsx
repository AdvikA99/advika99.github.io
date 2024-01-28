import React, { useRef, useEffect, useState } from 'react';
import './NoteItem.css';
import NoteTypeTooltip from '../NoteTypeTooltip/NoteTypeTooltip';
import { NoteType } from '../../../CalendarApp';
import NotesIcon from '@mui/icons-material/Notes';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CakeIcon from '@mui/icons-material/Cake';
import { lightBlue, green, pink } from '@mui/material/colors';
import { useTheme } from '@mui/material';

function NoteItem(props : any) {
  const theme = useTheme();

  const [addNoteValue, setAddNoteValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const initNoteType = props.noteType === NoteType.Add ? NoteType.Misc : props.noteType;
  const [addNoteType, setAddNoteType] = useState(initNoteType);

  useEffect(() => {
    if (textAreaRef.current) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current.scrollHeight;  

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef.current, addNoteValue]);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    setAddNoteValue(val);
  };

  const handleKeyDown = (event : any) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default behavior of the Enter key in a textarea

      if (event.target) {
        props.handleEnterPress(props.noteDate, addNoteType, event.target.value);
        event.target.value = "";
        setAddNoteValue("");
        setAddNoteType(initNoteType);
      }
    }
  };
  
  const handleAddNoteTypeChange = (newNoteType : NoteType) => {
    setAddNoteType(newNoteType);
  }

  return (
    <div>
      {props.noteType === NoteType.Add && (
        <div className="noteItem">
          <NoteTypeTooltip selectedNoteType={addNoteType} onSelectionChange={handleAddNoteTypeChange} tooltipDirection="above">
            <div>
              {addNoteType === NoteType.Misc && <NotesIcon className="notesTypeIcon selectable" sx={{fontSize: 24, color: lightBlue[500], "&:hover": {color: "white"}}}/>}
              {addNoteType === NoteType.Reminder && <NotificationsActiveIcon className="notesTypeIcon selectable" sx={{fontSize: 24, color: green[500], "&:hover": {color: "white"}}}/>}
              {addNoteType === NoteType.Birthday && <CakeIcon className="notesTypeIcon selectable" sx={{fontSize: 24, color: pink[500], "&:hover": {color: "white"}}}/>}
            </div>
          </NoteTypeTooltip>
          <textarea 
            className="addNoteTextArea" 
            rows={1}
            onChange={handleChange}
            placeholder="Add a new Note"
            onKeyDown={handleKeyDown}
            ref={textAreaRef}></textarea>
        </div>
      )}
      {props.noteType !== NoteType.Add && (
        <div className="noteItem">
          {addNoteType === NoteType.Misc && <NotesIcon className="notesTypeIcon" sx={{fontSize: 24, color: lightBlue[500]}}/>}
          {addNoteType === NoteType.Reminder && <NotificationsActiveIcon className="notesTypeIcon" sx={{fontSize: 24, color: green[500]}}/>}
          {addNoteType === NoteType.Birthday && <CakeIcon className="notesTypeIcon" sx={{fontSize: 24, color: pink[500]}}/>}
          <p className="noteText">{props.noteText}</p>
          <button className="deleteNoteButton"style={{color: theme.palette.primary.contrastText}}  onClick={() => props.handleDelete(props.noteId)}>✖</button>
        </div>
      )}
    </div>
  );
}

export default NoteItem;
