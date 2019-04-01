import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Release = (props) => {
  const { img, name, link } = props;
  return (
    <Link to={`/music/releases/${link}`}>
      <div className="release">
        <img src={require(`../../images/releases/${img}`)} alt={name} className="releasePic" />
        <div className="releaseMiddle">
          <div className="releaseText">{name}</div>
        </div>
      </div>
    </Link>
  );
};

Release.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Release;
