import React from 'react';
import './SocialLinks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook, faInstagram, faSoundcloud, faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  {
    name: 'Soundcloud',
    href: 'https://soundcloud.com/riddimrecordsuk',
    icon: faSoundcloud,
    key: 'soundcloud',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/RiddimRecordsUK/',
    icon: faFacebook,
    key: 'facebook',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/riddimrecords/',
    icon: faInstagram,
    key: 'instagram',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/riddimcardiff',
    icon: faTwitter,
    key: 'twitter',
  },
];

const SocialLinks = () => (
  <div className="socialLinks">
    <h2 style={{ margin: '0px' }}>Connect</h2>
    <ul className="socialList">
      {socialLinks.map(link => (
        <li key={link.key}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
            aria-label={link.name}
          >
            <FontAwesomeIcon className="socialIcon" icon={link.icon} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default SocialLinks;
