import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './Layout.css';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const LayoutDiv = styled.div`
  text-align: center;
  background-color: #111111; /* #282c34; */
  min-height: 100vh;
  color: white;
  margin: auto;
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 100%;
  /* line-height: 1.8em; */
`;

const Layout = ({ children }) => (
  <LayoutDiv>
    <Helmet>
      <html lang="en-GB" />
      <meta
        name="description"
        content="A UK-based record label founded on all things drum and bass."
      />
      <meta
        name="keywords"
        content="Riddim Records, Drum and Bass, UK Label"
      />
    </Helmet>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </LayoutDiv>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
