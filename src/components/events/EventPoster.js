import React from 'react';
import styled from 'styled-components';
import eventProps from './eventProps';

const EventImg = styled.img`
  border: 5px solid white;
  max-width: 30vw;
  height: auto;
  grid-area: eventPoster;
  justify-self: center;
  @media screen and (max-width: 768px) {
    max-width: 50vw;
  }
`;

const EventPoster = (props) => {
  const { event } = props;
  return (
    <EventImg src={require(`../../images/events/${event.poster}`)} alt="Riddim Poster" />
  );
};

EventPoster.propTypes = eventProps;

export default EventPoster;
