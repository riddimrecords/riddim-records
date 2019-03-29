import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { pastEvents, upcomingEvents } from '../../data/events';

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

const WebLinks = () => (
  <WebLinksList>
    <li>
      <WebLink to="/about">
        About
      </WebLink>
    </li>
    <li>
      <WebLink to={`/events/${upcomingEvents.length === 0 ? pastEvents[0].name : upcomingEvents[0].name}`}>
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

export default WebLinks;
