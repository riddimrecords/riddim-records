import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import artistProps from './artistProps';
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

ArtistContainer.propTypes = artistProps;

export default ArtistContainer;
