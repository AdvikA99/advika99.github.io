import React, { useEffect, useRef, useState } from 'react';
import './EventBanner.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { months } from '../EventCalendar/EventCalendar';

interface Event {
  name: string,
  imageUrl: string,
  location: string,
  time: string
}

const events : Event[] = [
  {name: "Book Club", imageUrl: "book_club.jpg", location: "Artigiano, Burnaby", time: "3 p.m."},
  {name: "Drake Concert", imageUrl: "concert.jpg", location: "Rogers Arena", time: "7 p.m."},
  {name: "Guitar Lessons", imageUrl: "guitar.jpg", location: "West 15th, Kitsilano", time: "11 a.m."},
  {name: "Volleyball Tournament", imageUrl: "volleyball.jpg", location: "Jericho Beach", time: "5 p.m."},
]

function EventBanner(props : any) {
  const [curEventInd, setCurEventInd] = useState(0);
  const slideshowTimerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (slideshowTimerRef.current) {
      clearTimeout(slideshowTimerRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    slideshowTimerRef.current = setTimeout(() =>
      setCurEventInd((prevIndex) => (prevIndex + 1) % events.length), 5000
    )

    return () => resetTimeout();
  }, [curEventInd]);

  const handlePrevEvent = () => {
    if (curEventInd === 0) {
      setCurEventInd(events.length - 1);
    } else {
      setCurEventInd(curEventInd - 1);
    }
  }

  const handleNextEvent = () => {
    setCurEventInd((curEventInd +  1) % events.length);
  }

  const getFormattedDate = (dateToFormat : Date) => {
    const date = dateToFormat.getDate();
    const dateEnding = (date === 1 || date === 21 || date === 31) ? "st" :
                          (date === 2 || date === 22 ? "nd" :
                            (date === 3 || date == 23 ? "rd" : "th"));
    return `${months[dateToFormat.getMonth()]} ${date}${dateEnding}`;
  }

  return (
    <div id="eventBanner">
      <ChevronLeftIcon id="prevEventBanner" onClick={handlePrevEvent}/>
      <ChevronRightIcon id="nextEventBanner" onClick={handleNextEvent}/>
      <div id="eventBannerImageContainer">
        {
          events.map((event, index) =>(
            <div 
              key={index}
              className="eventBannerImageDiv"
              style={{transform: `translateX(${-curEventInd * 100}%)`}}
            >
              <div className="eventBannerDetails">
                <p className="eventBannerName">{event.name}</p>
                <p className="eventLocation">{event.location}</p>
                <p className="eventDateAndTime">{getFormattedDate(props.selectedDate)} at {event.time}</p>
              </div>
              <img className="eventBannerImage" src={"craigslistRedesign/event_images/" + event.imageUrl}/>
            </div>
          ))
        }

        <div id="eventBannerImageSelectorRow">
          {
            events.map((event, index) => (
              <div 
                key={index}
                className={"eventBannerImageSelector" + (curEventInd === index ? " eventSelectorSelected" : "")}
                onClick={() => setCurEventInd(index)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default EventBanner;
