import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import "./Layout.css";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

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
    <Navbar/>
    <main>{children}</main>
    <Footer/>
  </LayoutDiv>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout