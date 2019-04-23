import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import riddimLogo from '../../images/shared/riddimLogo.png';

const MobileNav = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allPasteventsJson {
        edges {
          node {
            name
          }
        }
      }
    }
  `);

  const pastEvents = data.allPasteventsJson.edges;

  const { handleEventClick } = props;

  const handleNavButtonClick = () => {
    const nav = document.querySelector('.mobileNavLinks');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
  };

  const handleNavLinkClick = () => {
    const nav = document.querySelector('.mobileNavLinks');
    nav.style.display = 'none';
  };

  return (
    <div className="mobileNavbar">
      <div
        className="mobileNavbarTop"
        style={{
          margin: '20px auto 0px auto',
          display: 'flex',
          width: '80vw',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link to="/" onClick={handleNavLinkClick}>
          <img src={riddimLogo} alt="Riddim Logo" style={{ width: '50px' }} />
        </Link>
        <button
          onClick={handleNavButtonClick}
          style={{ color: 'white', background: 'inherit', border: 'none' }}
          type="button"
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{
              marginTop: '1px',
              fontSize: '25px',
              border: 'solid 1px grey',
              padding: '10px 15px',
              borderRadius: '10%',
            }}
          />
        </button>
      </div>
      <ul
        className="mobileNavLinks"
        style={{
          listStyleType: 'none',
          display: 'none',
          padding: '0',
        }}
      >
        <li key="about">
          <Link to="/about" onClick={handleNavLinkClick}>
            About
          </Link>
        </li>
        <li key="upcoming">
          <Link to={`/events/${pastEvents[0].node.name}`} onClick={handleEventClick}>
            Upcoming Events
          </Link>
        </li>
        <li key="past">
          <Link to={`/events/${pastEvents[0].node.name}`} onClick={handleNavLinkClick}>
            Past Events
          </Link>
        </li>
        <li key="artists">
          <Link to="/artists" onClick={handleNavLinkClick}>
            Artists
          </Link>
        </li>
        <li key="releases">
          <Link to="/music/releases" onClick={handleNavLinkClick}>
            Releases
          </Link>
        </li>
        <li key="demos">
          <Link to="/music/demos" onClick={handleNavLinkClick}>
            Demo Submission
          </Link>
        </li>
        <li key="lookbook">
          <Link to="/lookbook" onClick={handleNavLinkClick}>
            Lookbook
          </Link>
        </li>
        <li key="hr">
          <hr style={{ marginTop: '20px', color: 'grey', width: '50vw' }} />
        </li>
      </ul>
    </div>
  );
};

MobileNav.propTypes = {
  handleEventClick: PropTypes.func.isRequired,
};

export default MobileNav;
