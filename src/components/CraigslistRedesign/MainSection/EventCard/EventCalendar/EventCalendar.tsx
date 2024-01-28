import React from 'react';
import './EventCalendar.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const daysHeader = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

interface CalendarDate {
  partOfMonth: boolean,
  date: Date,
}

function EventCalendar(props: any) {
  const today = new Date();

  const numDaysInMonth = new Date(props.eventYear, props.eventMonth + 1, 0).getDate();
  const startDay = new Date(props.eventYear, props.eventMonth, 1).getDay();
  const endDay = new Date(props.eventYear, props.eventMonth + 1, 0).getDay();

  const prevMonthDays : CalendarDate[] = Array.from({ length: startDay }, (_, index) => (
    {
      partOfMonth: false, 
      date: new Date(props.eventYear, props.eventMonth, 1 - (startDay - index))
    }
  ));

  const curMonthDays : CalendarDate[] = Array.from({ length: numDaysInMonth }, (_, index) => ({partOfMonth: true, date: new Date(props.eventYear, props.eventMonth, index + 1)}));

  const nextMonthDays : CalendarDate[] = [];
  for (let i = endDay + 1, j = 1; i < 7; i++, j++) {
    nextMonthDays.push({partOfMonth: false, date: new Date(props.eventYear, props.eventMonth + 1, j)})
  }

  const calendarDays : CalendarDate[] = [...prevMonthDays, ...curMonthDays, ...nextMonthDays];
  const calendarWeeks = [];
  for (let i = 0; i < calendarDays.length / 7; i++) {
    calendarWeeks.push(calendarDays.slice(i * 7, (i + 1) * 7));
  }

  return (
    <div id="eventCalendar">
      <div id="eventMonthSelectorRow">
        <ChevronLeftIcon className="eventMonthSelector" onClick={props.onPrevMonth}/>
        <p id="eventMonth">{months[props.eventMonth]} {props.eventYear}</p>
        <ChevronRightIcon className="eventMonthSelector" onClick={props.onNextMonth}/>
      </div>

      <div className="calendarRow">
        {
          daysHeader.map((day) => (
            <p key={day} className="dayHeader">{day}</p>
          ))
        }
      </div>

      {
        calendarWeeks.map((week, w_ind) => (
          <div key={w_ind} className="calendarRow">
            {week.map((day, d_ind) =>(
              <p 
                key={d_ind} 
                className={
                  "calendarDate " +
                  (!day.partOfMonth ? "notPartOfMonth " : "") +
                  (day.date.getFullYear() === today.getFullYear() && day.date.getMonth() === today.getMonth() && day.date.getDate() === today.getDate() ? "curDate " : "") +
                  (day.date.getFullYear() === props.selectedDate.getFullYear() && day.date.getMonth() === props.selectedDate.getMonth() && day.date.getDate() === props.selectedDate.getDate() ? "selectedDate " : "")
                }
                onClick={() => props.onSelectDate(day.date)}
              >{day.date.getDate()}</p>
            ))}
          </div>
        ))
      }
    </div>
  );
}

export default EventCalendar;
