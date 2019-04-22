import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import eventProps from './eventProps';

const EventImg = styled.div`
  border: 5px solid white;
  max-width: 30vw;
  height: auto;
  grid-area: eventPoster;
  justify-self: center;
  @media screen and (max-width: 768px) {
    max-width: 50vw;
  }
  .eventImg { 
    width: 30vw;
  }
`;

const EventPoster = (props) => {
  const { event } = props;
  return (
    <EventImg fluid={event.poster.childImageSharp.fluid}>
      <Img className="eventImg" fluid={event.poster.childImageSharp.fluid} alt={`${event.name} Poster`} />
    </EventImg>
  );
};

EventPoster.propTypes = eventProps;

export default EventPoster;
