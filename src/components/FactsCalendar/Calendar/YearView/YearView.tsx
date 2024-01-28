import React from 'react';
import './YearView.css';
import YearItem from './YearItem/YearItem';

function YearView(props: any) {
  const daysButtons = []
  for (let i = 0; i < 366; i++) {
    daysButtons.push(<YearItem key={i + 1} dayInYear={i + 1} notes={props.notes} saveNewNote={props.saveNewNote} deleteNote={props.deleteNote}></YearItem>)
  }

  return (
    <div id="yearItemContainer">
      {daysButtons}
    </div>
  );
}

export default YearView;
