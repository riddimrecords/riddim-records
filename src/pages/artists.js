import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Layout from '../components/shared/Layout';
import ArtistContainer from '../components/artists/ArtistContainer';

const { artists } = require('../data/artists');

const ArtistsDiv = styled.div`
  width: 80vw;
  margin: 100px auto auto auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Artists = () => (
  <Layout>
    <Helmet>
      <title>Riddim Records | Artists</title>
    </Helmet>
    <ArtistsDiv className="artists">
      {artists.map(artist => <ArtistContainer key={artist.key} artist={artist} />)}
    </ArtistsDiv>
  </Layout>
);

export default Artists;
