import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Layout from '../components/shared/Layout';
import EventsBanner from '../components/events/EventsBanner';
import EventInfo from '../components/events/EventInfo';

const EventsMain = styled.div`
  font-size: 20px;
  margin-top: 50px;
  width: 75vw;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6em;
`;

export default ({ pageContext: { event, events } }) => (
  <Layout>
    <Helmet>
      <title>Riddim Records | Events</title>
    </Helmet>
    <div style={{marginTop: '80px'}}>
      {events.length > 1 ? <EventsBanner event={event} events={events}  /> : ''}
      <EventsMain>
        <EventInfo event={event} events={events}/>
      </EventsMain>
    </div>
  </Layout>
);
