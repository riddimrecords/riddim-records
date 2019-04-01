import React from 'react';
import Layout from '../../components/shared/Layout';
import Release from '../../components/music/release';
import './releases.css';

const { releases } = require('../../data/releases');

const Releases = () => (
  <Layout>
    <div className="releasePage">
      {releases.map(release => (
        <Release img={release.pic} name={release.name} link={release.key} />
      ))}
    </div>
  </Layout>
);

export default Releases;
