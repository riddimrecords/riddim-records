import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoundcloud, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./ArtistSocial.css";
import aor from "../../images/shared/aor.png";

const ArtistSocial = props => {
  const artistSocialCols = `repeat(${Object.keys(props.artist.social).length}, 1fr)`;
  // const artistGap = (props.artist.name === "Hannah Lux") || (props.artist.name === "Skinny") === "Hannah Lux" 
    // ? "40px" : "auto";
  return (
    <div
      className="artistSocial"
      style={{
        gridTemplateColumns: artistSocialCols,
        // gridColumnGap: artistGap
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

export default ArtistSocial;
