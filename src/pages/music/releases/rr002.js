import React from 'react';
import Layout from '../../../components/shared/Layout';
import DisplayRelease from '../../../components/releases/DisplayRelease';
import releases from '../../../data/releases';

const RR001 = (props) => (
  <Layout>
    <DisplayRelease release={releases[0]}/>
  </Layout>
);

export default RR001;