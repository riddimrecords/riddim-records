import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/shared/Layout';
import ArtistSocial from '../components/artists/ArtistSocial';
import './artist.css';

export default ({ pageContext: { artist } }) => {
  return (
    <Layout>
    <Helmet>
      <title>Riddim Records | Artists</title>
    </Helmet>
      <div className='artistGrid'> 
        <h1 className='artistTitle'>{artist.name}</h1>
        <div className='artistImg' >
          <img src={require(`../images/artists/${artist.pic}`)} alt={artist.name}/>
        </div>
        <div className='artistInfo'>
          {artist.info.map(paragraph => <p>{paragraph}</p>)}
        </div>
        <ArtistSocial artist={artist}/>
      </div>
    </Layout>
  );
};