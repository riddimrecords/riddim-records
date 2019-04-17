import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../../components/shared/Layout';
import Release from '../../components/music/release';
import './releases.css';

const { releases } = require('../../data/releases');

const Releases = () => (
  <Layout>
    <Helmet>
      <title>Riddim Records | Releases</title>
    </Helmet>
    <div className="releasePage">
      {releases.map(release => (
        <Release img={release.pic} name={release.name} link={release.key} />
      ))}
    </div>
  </Layout>
);

export default Releases;
