import React from "react";
import styled from 'styled-components';
import Newsletter from "./Newsletter";
import WebLinks from "./WebLinks";
import SocialLinks from "./SocialLinks";

const FooterContainer = styled.footer`
  color: #888787;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5px;
  padding-bottom: 5px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: "newsletter middle socialLinks";
  align-items: center;
  line-height: 1.5em;
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-row-gap: 15px;
    grid-template-areas:
      "newsletter"
      "socialLinks"
      "middle";
  }
`;

const FooterLine = styled.hr`
  width: 100vw;
  margin: 110px auto 0px auto;
  border: solid 1px white;
`;

const Footer = props => (
  <div>
    <FooterLine/>
    <FooterContainer className="footer">
      <Newsletter />
      <div className="middle" style={{ gridArea: "middle"}}>
        <WebLinks />
        <p style={{ marginTop: "5px", fontSize: "20px" }}>
          &copy; Riddim Records {new Date().getFullYear()}
        </p>
      </div>
      <SocialLinks />
    </FooterContainer>
  </div>
);

export default Footer;
