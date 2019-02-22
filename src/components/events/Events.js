import React from 'react';
import styled from 'styled-components';
import Layout from '../shared/Layout';
import EventsBanner from './EventsBanner';
import EventInfo from './EventInfo';

const EventsMain = styled.div`
  font-size: 20px;
  margin-top: 50px;
  width: 75vw;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6em;
`;

const Events = props => (
  <Layout>
    <div style={{marginTop: '80px'}}>
      {props.events.length > 1 ? <EventsBanner event={props.event} events={props.events}  /> : ''}
      <EventsMain>
        <EventInfo event={props.event} events={props.events}/>
      </EventsMain>
    </div>
  </Layout>
);

export default Events;
