/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/shared/Layout';
import ArtistSocial from '../components/artists/ArtistSocial';
import './artist.css';

const ArtistPage = ({ data }) => {
  const artist = data.artistsJson;
  return (
    <Layout>
      <Helmet>
        <title>Riddim Records | Artists</title>
      </Helmet>
      <div className="artistGrid">
        <h1 className="artistTitle">{artist.name}</h1>
        <div className="artistImg">
          <Img className="artistImgFluid" fluid={artist.pic.childImageSharp.fluid} alt={artist.name} />
        </div>
        <div className="artistInfo">
          {artist.info.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
        <ArtistSocial artist={artist} />
      </div>
    </Layout>
  );
};

ArtistPage.propTypes = {
  data: PropTypes.shape({
    artistsJson: PropTypes.object.isRequired,
  }).isRequired,
};

export default ArtistPage;

export const query = graphql`
  query ($key: String) {
    artistsJson(key: {eq: $key }) {
      key
      name
      social {
        soundcloud
        facebook
        instagram
        aor
      }
      info
      pic {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
