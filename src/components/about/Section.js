import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Logo = styled(Img)`
  width: 100px;
  margin: auto;
`;

const Section = (props) => {
  const { brand } = props;
  return (
    <div>
      <h1>{brand.name}</h1>
      <div>{brand.info}</div>
      <Logo fluid={brand.logo} className="aboutLogo" alt={`${brand.name} logo`} />
    </div>
  );
};

Section.propTypes = {
  brand: PropTypes.shape({
    name: PropTypes.string.isRequired,
    info: PropTypes.object.isRequired,
    logo: PropTypes.object.isRequired,
  }).isRequired,
};

export default Section;
