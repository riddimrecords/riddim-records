import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import './ArtistContainer.css';

const ArtistContainer = (props) => {
  const { artist } = props;
  return (
    <Link to={`/artists/${artist.node.key}`}>
      <div className="artist" key={artist.name}>
        <Img className="artistPic" fluid={artist.node.pic.childImageSharp.fluid} alt={artist.node.name} />
        <div className="artistMiddle">
          <div className="artistText">{artist.node.name}</div>
        </div>
      </div>
    </Link>
  );
};

ArtistContainer.propTypes = {
  artist: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default ArtistContainer;
