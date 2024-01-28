import React, { useEffect, useState } from 'react';
import './YearItem.css';
import DateItemTooltip from '../../DateItemTooltip/DateItemTooltip';
import Modal from '@mui/material/Modal';
import DateModal from '../../DateModal/DateModal';
import { Note, getFormattedDate } from '../../../CalendarApp';
import { useTheme } from '@mui/material';

export function dateFromDay(dayInYear : number) : Date {
  const currentYear = new Date().getFullYear();
  const date = new Date(currentYear, 0);
  return new Date(date.setDate(dayInYear)); // add the number of days
}

function YearItem(props : any) {
  const theme = useTheme();

  const [openDateModal, setOpenDateModal] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const handleOpen = () => setOpenDateModal(true);
  const handleClose = () => setOpenDateModal(false);

  const itemDate = dateFromDay(props.dayInYear);
  const curDate = new Date();

  let itemMonthCategory = itemDate.getMonth() % 3;

  useEffect(() => {
    if ((props.notes as Note[]).filter((note) => note.date === getFormattedDate(itemDate)).length > 0) {
      if (itemMonthCategory === 0) {
        setBackgroundColor(theme.yearColors.color0B);
      } else if (itemMonthCategory === 1) {
        setBackgroundColor(theme.yearColors.color1B);
      } else {
        setBackgroundColor(theme.yearColors.color2B);
      }
    } else {
      setBackgroundColor("transparent");
    }
  }, [theme, props.notes]);

  const borderColor =  itemMonthCategory === 0 ? theme.yearColors.color0A : (itemMonthCategory === 1 ? theme.yearColors.color1A : theme.yearColors.color2A);

  return (
    <div>
      <DateItemTooltip itemDate={itemDate} notes={props.notes} saveNewNote={props.saveNewNote} deleteNote={props.deleteNote} isDateModalOpen={openDateModal}>
        <button 
          className="yearItem"
          onClick={() => {
            handleOpen();
          }}
          style={
            (curDate.getMonth() === itemDate.getMonth() && curDate.getDate() == itemDate.getDate()) ?
            {color: "white", borderColor: "white", backgroundColor: "rgb(200, 50, 50)"} :
            {color: theme.palette.primary.contrastText, borderColor: borderColor, backgroundColor: backgroundColor}
          }>
            {itemDate.getDate()}
        </button>
      </DateItemTooltip>
      <Modal
        open={openDateModal}
        onClose={handleClose}>
          <div><DateModal date={itemDate} notes={props.notes} saveNewNote={props.saveNewNote} deleteNote={props.deleteNote}/></div>
      </Modal>
    </div>
  );
}

export default YearItem;
