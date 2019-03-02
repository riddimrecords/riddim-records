import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/shared/Layout';
import './release.css';

export default ({ pageContext: { release } }) => (
  <Layout>
    <Helmet>
      <title>Riddim Records | Releases</title>
    </Helmet>
    <div className='releaseGrid'> 
      <h1 className='releaseTitle'>Cat No. {release.name}</h1>
      <h2 className='releaseDate'>Release Date: {release.releaseDate}</h2>
      <div className='releaseImg' >
        <img src={require(`../images/releases/${release.pic}`)} alt={release.name}/>
      </div>
      <div className='releaseInfo'>
        {release.info.map(paragraph => <p>{paragraph}</p>)}
        <a style={{color: 'white'}} href={release.fanlink} target='_blank' rel='noopener noreferrer'>Stream/Download</a>
      </div>
      <div className='releaseSC' style={{margin: '50px auto 0px auto', width: '75%'}}>
      <div dangerouslySetInnerHTML={{ __html: release.soundcloud}}></div>
      </div>
    </div>
  </Layout>
);
