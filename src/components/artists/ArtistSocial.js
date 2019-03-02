import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoundcloud, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./ArtistSocial.css";
import aor from "../../images/shared/aor.png";

const ArtistSocial = props => {
  const artistSocialCols = `repeat(${Object.keys(props.artist.social).length}, 1fr)`;
  return (
    <div
      className="artistSocial"
      style={{
        gridTemplateColumns: artistSocialCols,
      }}
    >
      {props.artist.social.soundcloud ? (
        <a href={props.artist.social.soundcloud} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="artistSocialIcon" icon={faSoundcloud} />
        </a>) : "" }
      { props.artist.social.facebook ? (
        <a href={props.artist.social.facebook} target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon className="artistSocialIcon" icon={faFacebook} />
        </a> ) : "" }
      {props.artist.social.instagram ? (
        <a href={props.artist.social.instagram} target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon className="artistSocialIcon" icon={faInstagram} />
        </a>) : "" }
      {props.artist.social.aor ? (
        <a href={props.artist.social.aor} target="_blank" rel="noopener noreferrer">
          <img src={aor} alt="AOR Mix" style={{ width: "65px" }} />
        </a>
      ) : "" }
    </div>
  );
};

ArtistSocial.propTypes = {
  artist: PropTypes.shape({
    social: PropTypes.shape({
      soundcloud: PropTypes.string,
      facebook: PropTypes.string,
      instagram: PropTypes.string,
      aor: PropTypes.string
    })
  })
}

export default ArtistSocial;
