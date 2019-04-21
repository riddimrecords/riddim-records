import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import eventProps from './eventProps';

const EventDate = (props) => {
  const { event, events } = props;
  return (
    <div className="eventDateContainer">
      <Link
        className="mobileButtonPrev"
        to={`/events/riddim${
          event.key === events[0].node.key ? events[events.length - 1].key : event.key - 1
        }`}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <h1 className="eventDate" style={{ fontSize: '25px' }}>
        {event.date}
      </h1>
      <Link
        className="mobileButtonNext"
        to={`/events/riddim${
          event.key === events[events.length - 1].key ? events[0].node.key : event.key + 1
        }`}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  );
};

EventDate.propTypes = eventProps;
export default EventDate;
