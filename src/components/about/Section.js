import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
  width: 100px;
`;

const Section = (props) => (
  <div>
    <h1>{props.brand.name}</h1>
    <div>{props.brand.info}</div>
    <Logo src={props.brand.logo} alt={`${props.brand.name} Logo`} className='aboutLogo'/>
  </div>
);

export default Section;