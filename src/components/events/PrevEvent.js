import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import eventProps from './eventProps';

const PrevEvent = (props) => {
  const { event, events } = props;
  return (
    <div>
      <Link to={`/events/riddim${event.key === events[0].node.key ? events[events.length - 1].node.key : event.key - 1}`}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '30px', color: 'white' }} />
      </Link>
    </div>
  );
};

PrevEvent.propTypes = eventProps;

export default PrevEvent;
