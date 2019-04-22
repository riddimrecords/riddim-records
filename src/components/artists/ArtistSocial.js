import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoundcloud, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import artistProps from './artistProps';
import './ArtistSocial.css';
import aor from '../../images/shared/aor.png';

const ArtistSocial = (props) => {
  const { artist } = props;
  // eslint-disable-next-line max-len
  Object.keys(artist.social).forEach(key => (artist.social[key] == null) && delete artist.social[key]);
  const artistSocialCols = `repeat(${Object.keys(artist.social).length}, 1fr)`;
  return (
    <div
      className="artistSocial"
      style={{
        gridTemplateColumns: artistSocialCols,
      }}
    >
      {artist.social.soundcloud ? (
        <a href={artist.social.soundcloud} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="artistSocialIcon" icon={faSoundcloud} />
        </a>
      ) : '' }
      { artist.social.facebook ? (
        <a href={artist.social.facebook} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="artistSocialIcon" icon={faFacebook} />
        </a>
      ) : '' }
      {artist.social.instagram ? (
        <a href={artist.social.instagram} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="artistSocialIcon" icon={faInstagram} />
        </a>
      ) : '' }
      {artist.social.aor ? (
        <a href={artist.social.aor} target="_blank" rel="noopener noreferrer">
          <img src={aor} alt="AOR Mix" style={{ width: '65px' }} />
        </a>
      ) : '' }
    </div>
  );
};

ArtistSocial.propTypes = artistProps;

export default ArtistSocial;
