import React, { useState, useRef, useEffect } from 'react';
import './DateItemTooltip.css';
import { Note, getFormattedDate } from '../../CalendarApp';
import DateItemTooltipNoteItem from './DateItemTooltipNoteItem/DateItemTooltipNoteItem';
import { useTheme } from '@mui/material';
import { Box } from '@mui/system';

function DateItemTooltip(props : any) {
  const theme = useTheme();

  const tooltipParentRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [leftPosition, setLeftPosition] = useState('50%');
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const [showOnTop, setShowOnTop] = useState(true);

  useEffect(() => {
    const updatePosition = () => {
      if (isTooltipVisible && tooltipParentRef.current && tooltipRef.current) {
        const rectParent = tooltipParentRef.current.getBoundingClientRect();
        const rect = tooltipRef.current.getBoundingClientRect();
        
        const x1 = rectParent.x + rectParent.width/2 - rect.width/2;
        const x2 = Math.max(16, x1) - rect.width/2 + rectParent.width/2;
        setLeftPosition(`calc(${x2 - x1}px)`);

        setShowOnTop(rectParent.y - rect.height >= 8);
      }
    };

    // Initial update
    updatePosition();

    window.addEventListener('resize', updatePosition);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, [isTooltipVisible]);

  useEffect(() => {
    setTooltipVisible(isTooltipVisible && !props.isDateModalOpen);
  }, [props.isDateModalOpen])

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const date = props.itemDate;
  const month = date.toLocaleString('default', { month: 'long' });
  const dateSuffix = (date.getDate() === 1 || date.getDate() === 21 || date.getDate() === 31 ? "st" :
                        (date.getDate() === 2 || date.getDate() === 22 ? "nd" : 
                          (date.getDate() === 3 || date.getDate() === 23 ? "rd" : "th")));

  const dateCode = getFormattedDate(date);
  const itemNotes = (props.notes as Note[]).filter((note) => (note.date === dateCode));

  const numNotesShown = 5;
            
  return (
    <div id="dateItemTooltipParent" ref={tooltipParentRef}>
      <div id="dateItemTooltipChildrenContainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {props.children}
      </div>
      {isTooltipVisible && (   
        <Box 
          id="dateItemTooltipArrow" 
          className={showOnTop ? "dateItemTooltipArrowTop" : "dateItemTooltipArrowBottom"} 
          sx={{backgroundColor: theme.palette.secondary.dark}}></Box>
      )}
      {isTooltipVisible && (
        <Box 
          id="dateItemTooltip" 
          ref={tooltipRef} 
          sx={{left: leftPosition, backgroundColor: theme.palette.secondary.dark, color: "#f0f0f0"}}
          className={showOnTop ? "dateItemTooltipTop" : "dateItemTooltipBottom"}>
          <p id="dateItemTooltipHeader">{month} {date.getDate() + dateSuffix}</p>
          {
            itemNotes.slice(0, numNotesShown).map((note, index) => (
              <DateItemTooltipNoteItem
                key={note.id}
                noteDate={dateCode} 
                noteId={note.id} 
                noteType={note.type} 
                noteText={note.text}/>
            ))
          }
          {
            itemNotes.length > numNotesShown && (
              <p id="dateItemTooltipAdditionalNotesMessage">+{itemNotes.length - numNotesShown} more...</p>
            )
          }
        </Box>
      )}
    </div>
  );
}

export default DateItemTooltip;
