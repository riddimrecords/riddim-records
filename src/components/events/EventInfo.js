import React from 'react';
import EventPoster from './EventPoster';
import EventDate from './EventDate';
import EventLocation from './EventLocation';
import eventProps from './eventProps';
import './EventInfo.css';

const EventInfo = (props) => {
  const { event, events } = props;
  return (
    <div className="eventInfo">
      <EventPoster event={event} />
      <EventDate event={event} events={events} />
      <p className="eventDesc">{event.info}</p>
      <div className="eventArtists">
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {event.artists.map(artist => <li key={artist}>{artist}</li>)}
        </ul>
      </div>
      <EventLocation event={event} />
    </div>
  );
};

EventInfo.propTypes = eventProps;

export default EventInfo;
