import React from "react";
import "./SocialLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faSoundcloud, faTwitter } from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    href: "https://soundcloud.com/riddimrecordsuk",
    icon: faSoundcloud,
    key: "soundcloud"
  },
  {
    href: "https://www.facebook.com/RiddimRecordsUK/",
    icon: faFacebook,
    key: "facebook"
  },
  {
    href: "https://www.instagram.com/riddimrecords/",
    icon: faInstagram,
    key: "instagram"
  },
  { 
    href: "https://twitter.com/riddimcardiff", 
    icon: faTwitter, 
    key: "twitter" 
  }
];

const SocialLinks = props => (
  <div className="socialLinks">
    <h2 style={{ margin: "0px" }}>Connect</h2>
    <ul className="socialList">
      {socialLinks.map(link => {
        return (
          <li key={link.key}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink"
            >
              <FontAwesomeIcon className="socialIcon" icon={link.icon} />
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

export default SocialLinks;
