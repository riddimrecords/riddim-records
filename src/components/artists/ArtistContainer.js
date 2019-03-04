import React from 'react';
import { Link } from 'gatsby';
import artistProps from './artistProps';
import './ArtistContainer.css';

const ArtistContainer = (props) => {
  const { artist } = props;
  return (
    <Link to={`/artists/${artist.key}`}>
      <div className="artist" key={artist.name}>
        <img className="artistPic" src={require(`../../images/artists/${artist.pic}`)} alt={artist.name} />
        <div className="artistMiddle">
          <div className="artistText">{artist.name}</div>
        </div>
      </div>
    </Link>
  );
};

ArtistContainer.propTypes = artistProps;

export default ArtistContainer;
