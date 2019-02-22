import React from 'react';
import './DisplayRelease.css';

const DisplayRelease = (props) => (
  <div className='releaseGrid'> 
    <h1 className='releaseTitle'>Cat No. {props.release.name}</h1>
    <h2 className='releaseDate'>Release Date: {props.release.releaseDate}</h2>
    <div className='releaseImg' >
      <img src={props.release.pic} alt={props.release.name}/>
    </div>
    <div className='releaseInfo'>
      {props.release.info}
      <a style={{color: 'white'}} href={props.release.fanlink} target='_blank' rel='noopener noreferrer'>Stream/Download</a>
    </div>
    <div className='releaseSC' style={{margin: '50px auto 0px auto', width: '75%'}}>
      {props.release.soundcloud}
    </div>
  </div>
);

export default DisplayRelease;
