/* eslint react/no-danger: 0, react/no-array-index-key: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Layout from '../components/shared/Layout';
import './release.css';

const ReleasePage = ({ pageContext: { release } }) => (
  <Layout>
    <Helmet>
      <title>Riddim Records | Releases</title>
    </Helmet>
    <div className="releaseGrid">
      <h1 className="releaseTitle">
        Cat No.
        {' '}
        {release.cat}
      </h1>
      <h2 className="releaseDate">
        Release Date:
        {' '}
        {release.releaseDate}
      </h2>
      <div className="releaseImg">
        <img src={require(`../images/releases/${release.pic}`)} alt={release.name} />
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

ReleasePage.propTypes = {
  pageContext: PropTypes.shape({
    release: PropTypes.object.isRequired,
  }).isRequired,
};

export default ReleasePage;
