import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../components/shared/Layout';
import Release from '../../components/music/release';
import './releases.css';

const Releases = ({ data }) => {
  const releases = data.allReleasesJson.edges;
  return (
    <Layout>
      <Helmet>
        <title>Riddim Records | Releases</title>
      </Helmet>
      <div className="releasePage">
        {releases.map(release => (
          // eslint-disable-next-line max-len
          <Release key={release.node.key} img={release.node.pic} name={release.node.name} link={release.node.key} />
        ))}
      </div>
    </Layout>
  );
};

Releases.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Releases;

export const query = graphql`
  query {
    allReleasesJson   {
      edges {
        node {
          key
          name
          pic {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
