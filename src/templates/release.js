/* eslint react/no-danger: 0, react/no-array-index-key: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/shared/Layout';
import './release.css';

const ReleasePage = ({ data }) => {
  const release = data.releasesJson;
  return (
    <Layout>
      <Helmet>
        <title>Riddim Records | Releases</title>
      </Helmet>
      <div className="releaseGrid">
        <h2 className="releaseTitle">
          Cat No.
          {' '}
          {release.cat}
        </h2>
        <h2 className="releaseDate">
          Release Date:
          {' '}
          {release.releaseDate}
        </h2>
        <div className="releaseImg">
          <Img fluid={release.pic.childImageSharp.fluid} alt={release.name} />
        </div>
        <div className="releaseInfo">
          {release.info.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          {release.released ? <a style={{ color: 'white' }} href={release.fanlink} target="_blank" rel="noopener noreferrer">Stream/Download</a>
            : <a style={{ color: 'white' }} href={release.preorder} target="_blank" rel="noopener noreferrer">Preorder</a>}
        </div>
        {release.soundcloud && (
        <div className="releaseSC" style={{ margin: '50px auto 0px auto', width: '75%' }}>
          <div dangerouslySetInnerHTML={{ __html: release.soundcloud }} />
        </div>
        )}
      </div>
    </Layout>
  );
};

ReleasePage.propTypes = {
  pageContext: PropTypes.shape({
    release: PropTypes.object.isRequired,
  }).isRequired,
};

export default ReleasePage;

export const pageQuery = graphql`
  query ($key: String) {
    releasesJson(key: {eq: $key }) {
      key
      cat
      releaseDate
      released
      info
      soundcloud
      fanlink
      pic {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
