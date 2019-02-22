import React from 'react';
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const PrevEvent = (props) => (
  <div>
    <Link to={`/events/riddim${props.event.key === props.events[0].key ? props.events[props.events.length-1].key : props.event.key-1}`}>
      <FontAwesomeIcon icon={faArrowLeft} style={{fontSize: '30px', color: 'white'}}/>
    </Link>
  </div>
);

export default PrevEvent;
