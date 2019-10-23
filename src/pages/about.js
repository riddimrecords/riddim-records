import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/shared/Layout';
import Section from '../components/about/Section';
import Info from '../data/about';

const AboutDiv = styled.div`
  width: 50vw;
  font-size: 20px;
  margin: 80px auto 0px auto;
  line-height: 1.7;
  @media screen and (max-width: 992px) {
    width: 80vw;
  }
`;

const AboutPage = ({ data }) => {
  Info[0].logo = data.riddimImg.childImageSharp.fluid;
  Info[1].logo = data.riddimRecordsImg.childImageSharp.fluid;
  return (
    <Layout>
      <Helmet>
        <title>Riddim Records | About</title>
      </Helmet>
      <AboutDiv>
        {Info.map(brand => <Section key={brand.name} brand={brand} />)}
      </AboutDiv>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default AboutPage;

export const pageQuery = graphql`
  query {
    riddimImg: file(relativePath: {eq: "shared/riddim.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    riddimRecordsImg: file(relativePath: {eq: "shared/riddimRecords.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
