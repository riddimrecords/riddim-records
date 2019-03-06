import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const WebLinksDiv = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const WebLink = styled(Link)`
  list-style-type: none;
  text-decoration: none;
  color: #888787;
  padding: 3px 0px;
`;

const WebLinks = () => (
  <WebLinksDiv>
    <WebLink to="/about">
      About
    </WebLink>
    <WebLink to="/events/riddim1">
      Events
    </WebLink>
    <WebLink to="/artists">
      Artists
    </WebLink>
    <WebLink to="/music/releases">
      Releases
    </WebLink>
    <WebLink to="/contact">
      Contact
    </WebLink>
  </WebLinksDiv>
);

export default WebLinks;
