import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import eventProps from './eventProps';

const NextEvent = (props) => {
  const { event, events } = props;
  return (
    <div>
      <Link to={`/events/riddim${event.key === events[events.length - 1].node.key ? events[0].node.key : event.key + 1}`}>
        <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '30px', color: 'white' }} />
      </Link>
    </div>
  );
};

NextEvent.propTypes = eventProps;

export default NextEvent;
