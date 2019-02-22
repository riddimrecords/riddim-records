import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Email = styled.a`
  color: white;
`;

const Panel = (props) => {
  const Details = styled.li`
    font-size: 25px;
    margin-top: 20px;
    grid-column: ${props.person.key === 5 ? '1 / 3': 'auto'};
    @media screen and (max-width: 992px) {
      font-size: 20px;
    }
  `;
  return (
    <Details>
      {props.person.job}<br/>{props.person.email}<br/>
      <Email href={`mailto:${props.person.email.toLowerCase()}`}>
        <FontAwesomeIcon icon={faEnvelope}/>
      </Email>
    </Details>
  );
}

export default Panel;