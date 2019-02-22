import React from "react";
import styled from 'styled-components';

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

const EventPoster = props => (
  <EventImg src={props.event.poster} alt="Riddim Poster" />
);

export default EventPoster;
