/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint no-alert: 0 */
import React from 'react';
import { Link, navigate } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // ensure icon loaded before render
import MobileNav from './MobileNav';
import './Navbar.css';
import riddimLogo from '../../images/shared/riddimLogo.png';
import { pastEvents, upcomingEvents } from '../../data/events';

const Icon = styled(FontAwesomeIcon)`
  font-size: 16px;
`;

const Navbar = () => {
  const handleShopClick = (e) => {
    e.preventDefault();
    alert(
      'Our shop is currently under construction. Please check back again soon!',
    );
  };
  const handleEventClick = (e) => {
    e.preventDefault();
    return upcomingEvents.length === 0
      ? alert('There are currently no upcoming events, but please check back again soon!')
      : navigate(`events/${upcomingEvents[0].name}`);
  };

  return (
    <nav>
      <ul className="navbar">
        <li key="logo">
          <Link to="/">
            <img src={riddimLogo} alt="Riddim Logo" style={{ width: '50px' }} />
          </Link>
        </li>
        <li key="about">
          <Link to="/about">About</Link>
        </li>
        <li key="events">
          <div className="dropdown">
            <button className="dropdown-button" type="button">
              Events
              <Icon
                icon={faCaretDown}
                style={{ marginLeft: '5px' }}
              />
            </button>
            <ul className="dropdown-content">
              <li key="upcoming" className="dropdown-item">
                <Link onClick={handleEventClick}>
                  Upcoming
                </Link>
                {/* <Link to={`/events/${upcomingEvents[0].name}`}>Upcoming</Link> */}
              </li>
              <li key="past" className="dropdown-item">
                <Link to={`/events/${pastEvents[0].name}`}>Past</Link>
              </li>
            </ul>
          </div>
        </li>
        <li key="artists">
          <Link to="/artists">Artists</Link>
        </li>
        <li key="music">
          <div className="dropdown">
            <button className="dropdown-button" type="button">
              Music
              <Icon
                icon={faCaretDown}
                style={{ marginLeft: '5px' }}
              />
            </button>
            <ul className="dropdown-content">
              <li key="releases" className="dropdown-item">
                <Link to="/music/releases">Releases</Link>
              </li>
              <li key="demos" className="dropdown-item">
                <Link to="/music/demos">Demo Submission</Link>
              </li>
            </ul>
          </div>
        </li>
        <li key="lookbook">
          <Link to="/lookbook">Lookbook</Link>
        </li>
        <li key="shop">
          <Link to="/shop" onClick={handleShopClick}>
            Shop
          </Link>
        </li>
        <li key="cart">
          <Link to="/cart" onClick={handleShopClick}>
            <Icon icon={faShoppingCart} />
          </Link>
        </li>
      </ul>
      <MobileNav />
    </nav>
  );
};

export default Navbar;
