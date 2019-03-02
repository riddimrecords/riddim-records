import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './ArtistContainer.css'

const ArtistContainer = props => (
  <Link to={`/artists/${props.artist.key}`}>
    <div className='artist' key={props.artist.name}>
      <img className='artistPic' src={require(`../../images/artists/${props.artist.pic}`)} alt={props.artist.name}/>
      <div className="artistMiddle">
        <div className="artistText">{props.artist.name}</div>
      </div>
    </div>
  </Link>
);

ArtistContainer.propTypes = {
  artist: PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
    pic: PropTypes.string,
  })
}

export default ArtistContainer;