import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
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

const EventPage = ({ data, pageContext }) => {
  const event = pageContext.type === 'past' ? data.pasteventsJson : data.upcomingeventsJson;
  const events = pageContext.type === 'past' ? data.allPasteventsJson.edges : data.allUpcomingeventsJson.edges;
  return (
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
};

EventPage.propTypes = {
  pageContext: PropTypes.shape({
    event: PropTypes.object.isRequired,
    events: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default EventPage;

export const query = graphql`
  query ($name: String) {
    pasteventsJson(name: {eq: $name }) {
      key
      name
      date
      info
      artists
      location
      poster {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allPasteventsJson {
      edges {
        node {
          key
          name
          date
          info
          artists
          location
          poster {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    upcomingeventsJson(name: {eq: $name }) {
      key
      name
      date
      info
      artists
      location
      poster {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allUpcomingeventsJson {
      edges {
        node {
          key
          name
          date
          info
          artists
          location
          poster {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
