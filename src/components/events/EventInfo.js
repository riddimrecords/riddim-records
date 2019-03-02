import React from "react";
import PropTypes from 'prop-types';
import EventPoster from "./EventPoster";
import EventDate from "./EventDate";
import EventLocation from './EventLocation';
import "./EventInfo.css";

const EventInfo = props => (
  <div className="eventInfo">
    <EventPoster event={props.event}/>
    <EventDate event={props.event} events={props.events}/>
    <p className="eventDesc" style={{fontSize: '23px'}}>{props.event.info}</p>
    <div className="eventArtists">
      <ul style={{listStyleType: 'none', padding: '0'}}>
        {props.event.artists.map((artist, index) => {
          return <li key={index}>{artist}</li>;
        })}
      </ul>
    </div>
    <EventLocation event={props.event}/>
  </div>
);

EventDate.propTypes = {
  event: PropTypes.shape({
    info: PropTypes.string,
    artists: PropTypes.array,
  }),
  events: PropTypes.array,
};

export default EventInfo;
