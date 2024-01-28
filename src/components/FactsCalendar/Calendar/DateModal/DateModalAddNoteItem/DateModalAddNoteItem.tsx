import React, { useEffect, useRef, useState } from 'react';
import './DateModalAddNoteItem.css';
import { NoteType } from '../../../CalendarApp';
import NoteTypeTooltip from '../../../DateDetails/NotesView/NoteTypeTooltip/NoteTypeTooltip';
import NotesIcon from '@mui/icons-material/Notes';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CakeIcon from '@mui/icons-material/Cake';
import { lightBlue, green, pink } from '@mui/material/colors';

function DateModalAddNoteItem(props: any) {
  const [addNoteValue, setAddNoteValue] = useState("");
  const [addNoteType, setAddNoteType] = useState(NoteType.Misc);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

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
        setAddNoteType(NoteType.Misc);
      }
    }
  };
  
  const handleAddNoteTypeChange = (newNoteType : NoteType) => {
    setAddNoteType(newNoteType);
  }

  return (
    <div id="dateModalAddNoteItem">
      <NoteTypeTooltip selectedNoteType={addNoteType} onSelectionChange={handleAddNoteTypeChange}>
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
  );
}

export default DateModalAddNoteItem;
