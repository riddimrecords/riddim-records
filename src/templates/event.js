import React from 'react';
import PropTypes from 'prop-types';
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

const EventPage = ({ pageContext: { event, events } }) => (
  <Layout>
    <Helmet>
      <title>Riddim Records | Events</title>
    </Helmet>
    <div style={{ marginTop: '80px' }}>
      {events.length > 1 ? <EventsBanner event={event} events={events} /> : ''}
      <EventsMain>
        <EventInfo event={event} events={events} />
      </EventsMain>
    </div>
  </Layout>
);

EventPage.propTypes = {
  pageContext: PropTypes.shape({
    event: PropTypes.object.isRequired,
    events: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default EventPage;
