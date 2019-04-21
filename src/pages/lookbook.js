import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/shared/Layout';
import './lookbook.css';

const LookbookGrid = styled.div`
  width: 80vw;
  margin: 50px auto 0px auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const LookbookPage = ({ data }) => {
  const lookbookImages = [data.lookbook1, data.lookbook2, data.lookbook3,
    data.lookbook4, data.lookbook5, data.lookbook6, data.lookbook7,
    data.lookbook8, data.lookbook9, data.lookbook10];
  return (
    <Layout>
      <Helmet>
        <title>Riddim Records | Lookbook</title>
      </Helmet>
      <LookbookGrid>
        {lookbookImages.map((image, index) => (
          <div key={image} className="lookbookImg">
            <Img fluid={image.childImageSharp.fluid} alt={`Lookbook ${index + 1} image`} />
          </div>
        ))}
      </LookbookGrid>
    </Layout>
  );
};

LookbookPage.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default LookbookPage;

export const pageQuery = graphql`
  query {
    lookbook1: file(relativePath: {eq: "lookbook/lookbook1.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lookbook2: file(relativePath: {eq: "lookbook/lookbook2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lookbook3: file(relativePath: {eq: "lookbook/lookbook3.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lookbook4: file(relativePath: {eq: "lookbook/lookbook4.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lookbook5: file(relativePath: {eq: "lookbook/lookbook5.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lookbook6: file(relativePath: {eq: "lookbook/lookbook6.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lookbook7: file(relativePath: {eq: "lookbook/lookbook7.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lookbook8: file(relativePath: {eq: "lookbook/lookbook8.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lookbook9: file(relativePath: {eq: "lookbook/lookbook9.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lookbook10: file(relativePath: {eq: "lookbook/lookbook10.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
