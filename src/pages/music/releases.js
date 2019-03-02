import React from 'react';
import { Link } from 'gatsby';
import Layout from "../../components/shared/Layout";
import './releases.css';
const { releases } = require('../../data/releases');

const Releases = () => (
  <Layout>
    <div className='releasePage'>
      <Link to={`music/releases/rr002`}>
        <div className='release'>
          <img src={require(`../../images/releases/${releases[0].pic}`)} alt={releases[0].name} className='releasePic'/>
          <div className="releaseMiddle">
            <div className="releaseText">{releases[0].name}</div>
          </div>
        </div>
      </Link>
      <Link to={`music/releases/rr001`}>
        <div className='release'>
          <img src={require(`../../images/releases/${releases[1].pic}`)} alt={releases[1].name} className='releasePic'/>
          <div className="releaseMiddle">
            <div className="releaseText">{releases[1].name}</div>
          </div>
        </div>
      </Link>
    </div>
  </Layout>
);

export default Releases;