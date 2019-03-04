import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Logo = styled.img`
  width: 100px;
`;

const Section = (props) => {
  const { brand } = props;
  return (
    <div>
      <h1>{brand.name}</h1>
      <div>{brand.info}</div>
      <Logo src={brand.logo} alt={`${brand.name} Logo`} className="aboutLogo" />
    </div>
  );
};

Section.propTypes = {
  brand: PropTypes.shape({
    name: PropTypes.string.isRequired,
    info: PropTypes.object.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Section;
