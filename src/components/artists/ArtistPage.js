import React from 'react';
import ArtistSocial from './ArtistSocial';
import './ArtistPage.css';

const ArtistPage = (props) => {
  return (
    <div className='artistGrid'> 
      <h1 className='artistTitle'>{props.artist.name}</h1>
      <div className='artistImg' >
        <img src={props.artist.pic} alt={props.artist.name}/>
      </div>
      <div className='artistInfo'>
        {props.artist.info}
      </div>
      <ArtistSocial artist={props.artist}/>
    </div>
  );
};

export default ArtistPage;