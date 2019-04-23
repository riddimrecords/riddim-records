import React from 'react';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';

const WebLinksList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  li {
    list-style-type: none;
    padding: 5px 0px;
  }
`;

const WebLink = styled(Link)`
  text-decoration: none;
  color: #888787;
`;

const WebLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      allPasteventsJson {
        edges {
          node {
            name
          }
        }
      }
      allUpcomingeventsJson {
        edges {
          node {
            name
          }
        }
      }
    }
  `);

  const pastEvents = data.allPasteventsJson.edges;
  const upcomingEvents = data.allUpcomingeventsJson.edges;

  return (
    <WebLinksList>
      <li>
        <WebLink to="/about">
          About
        </WebLink>
      </li>
      <li>
        <WebLink to={`/events/${upcomingEvents.length === 0 ? pastEvents[0].node.name : upcomingEvents[0].node.name}`}>
          Events
        </WebLink>
      </li>
      <li>
        <WebLink to="/artists">
          Artists
        </WebLink>
      </li>
      <li>
        <WebLink to="/music/releases">
          Releases
        </WebLink>
      </li>
      <li>
        <WebLink to="/contact">
          Contact
        </WebLink>
      </li>
    </WebLinksList>
  );
};

export default WebLinks;
