import React from "react";
import PropTypes from 'prop-types';
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const EventDate = (props) => (
  <div className="eventDateContainer">
    <Link
      className="mobileButtonPrev"
      to={`/events/riddim${
        props.event.key === props.events[0].key ? props.events[props.events.length-1].key : props.event.key-1
      }`}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </Link>
    <h1 className="eventDate" style={{ fontSize: "25px" }}>
      {props.event.date}
    </h1>
    <Link
      className="mobileButtonNext"
      to={`/events/riddim${
        props.event.key === props.events[props.events.length-1].key ? props.events[0].key : props.event.key+1
      }`}
    >
      <FontAwesomeIcon icon={faArrowRight} />
    </Link>
  </div>
);

EventDate.propTypes = {
  events: PropTypes.shape({
    key: PropTypes.string,
    date: PropTypes.string,
  })
};

export default EventDate;