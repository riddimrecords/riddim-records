import React from 'react';
import Layout from '../../../components/shared/Layout';
import DisplayRelease from '../../../components/releases/DisplayRelease';
import releases from '../../../data/releases';

const RR002 = (props) => (
  <Layout>
    <DisplayRelease release={releases[1]}/>
  </Layout>
);

export default RR002;