import React, { useState } from 'react';
import './EventCard.css';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EventCalendar from './EventCalendar/EventCalendar';
import EventBanner from './EventBanner/EventBanner';

function EventCard() {
  const today = new Date();
  const [eventYear, setEventYear] = useState(today.getFullYear());
  const [eventMonth, setEventMonth] = useState(today.getMonth());
  const [selectedEventDate, setSelectedEventDate] = useState(today);

  const handlePrevMonth = () => {
    const newEventDate = new Date(eventYear, eventMonth - 1);
    setEventYear(newEventDate.getFullYear());
    setEventMonth(newEventDate.getMonth());
  }

  const handleNextMonth = () => {
    const newEventDate = new Date(eventYear, eventMonth + 1);
    setEventYear(newEventDate.getFullYear());
    setEventMonth(newEventDate.getMonth());
  }

  const handleSelectedDate = (newSelectedDate : Date) => {
    setSelectedEventDate(newSelectedDate);
  }

  return (
    <div id="eventCard">
      <div className="cardHeaderRow">
        <CelebrationIcon/>
        <p className="cardHeader">Events</p>
      </div>

      <div id="eventCardDetails">
        <EventCalendar eventYear={eventYear} eventMonth={eventMonth} selectedDate={selectedEventDate} onPrevMonth={handlePrevMonth} onNextMonth={handleNextMonth} onSelectDate={handleSelectedDate}/>
        <EventBanner selectedDate={selectedEventDate}/>
      </div>
    </div>
  );
}

export default EventCard;
