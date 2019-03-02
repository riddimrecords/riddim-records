import React from 'react';
import styled from 'styled-components';

const EventLocationDiv = styled.div`
  width: 100%;
  margin-top: 50px;
  justify-self: center;
  grid-area: eventLocation;
  justify-self: center;
`;

const EventLocation = (props) => (
  <EventLocationDiv>
    <div dangerouslySetInnerHTML={{ __html: props.event.location}}></div>
  </EventLocationDiv>
);

export default EventLocation;
