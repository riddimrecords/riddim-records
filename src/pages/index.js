import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from '../components/shared/Layout';

const HomeDiv = styled.div`
  font-size: 20px;
  width: 80vw;
  margin: auto;
  margin-top: 80px;
  .homeImg { 
    max-width: 50%;
    margin: auto;
  }
  @media screen and (max-width: 992px) {
    .homeImg {
      max-width: 75%;
    }
  }
  @media screen and (max-width: 768px) {
    .homeImg {
      max-width: 100%;
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <Helmet>
      <title>Riddim Records | Home</title>
    </Helmet>
    <HomeDiv>
      <Img className="homeImg" fluid={data.homeImg.childImageSharp.fluid} alt="Mr Riddim" />
      {/* <img className="homeImg" src={homepageImg} /> */}
    </HomeDiv>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    homeImg: file(relativePath: {eq: "home/homepage.png"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
