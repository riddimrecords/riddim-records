/* eslint react/no-danger: 0 */
import React from 'react';
import styled from 'styled-components';
import eventProps from './eventProps';

const EventLocationDiv = styled.div`
  width: 100%;
  margin-top: 50px;
  justify-self: center;
  grid-area: eventLocation;
  justify-self: center;
`;

const EventLocation = (props) => {
  const { event } = props;
  return (
    <EventLocationDiv>
      <div dangerouslySetInnerHTML={{ __html: event.location }} />
    </EventLocationDiv>
  );
};

EventLocation.propTypes = eventProps;

export default EventLocation;
