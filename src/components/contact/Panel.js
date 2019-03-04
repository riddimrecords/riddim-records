import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Email = styled.a`
  color: white;
`;

const Panel = (props) => {
  const { person } = props;
  const Details = styled.li`
    font-size: 25px;
    margin-top: 20px;
    grid-column: ${person.key === 5 ? '1 / 3' : 'auto'};
    @media screen and (max-width: 992px) {
      font-size: 20px;
    }
  `;
  return (
    <Details>
      {person.job}
      <br />
      {person.email}
      <br />
      <Email href={`mailto:${person.email.toLowerCase()}`}>
        <FontAwesomeIcon icon={faEnvelope} />
      </Email>
    </Details>
  );
};

Panel.propTypes = {
  person: PropTypes.shape({
    key: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    email: PropTypes.string,
  }).isRequired,
};

export default Panel;
