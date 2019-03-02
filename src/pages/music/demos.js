import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from "../../components/shared/Layout";
import riddimRecordsImg from '../../images/shared/riddimRecords.png';
import './demos.css'

const Demos = () => (
  <Layout>
    <Helmet>
      <title>Riddim Records | Demos</title>
    </Helmet>
    <div className='demos' style={{marginTop: '50px'}}>
      <h1>Submit your demos below!</h1>
      <img src={riddimRecordsImg} alt='Riddim Records Logo' style={{width: '100px'}}/>
      <h2>Rules</h2>
      <ul style={{listStyleType: 'none', padding: '0', marginTop: '0'}}>
        <li>No bootlegs or unofficial remixes.</li>
        <li>Unsigned music only.</li>
        <li>Please only use safe links, i.e. private SoundCloud links or Dropbox/WeTransfer.</li>
        <li>Consider the sound of the label - No New-era Jump Up.</li>
        <li>Leave a brief comment about who you are, what influenced your track(s) and any other relevant info.</li>
      </ul>
      <form className='demosForm' style={{marginTop: '30px'}} action="https://formspree.io/dan@riddimrecords.co.uk" method="POST">
        <label htmlFor='name' style={{display: 'none'}}>Name:</label><input className='demosFormLabel' type='text' name='name' placeholder='Name'/>
        <label htmlFor='email'  style={{display: 'none'}}>Email:</label><input className='demosFormLabel'  type='email' name='email' placeholder='Email'/>
        <label htmlFor='link'  style={{display: 'none'}}>Link:</label><input className='demosFormLabel'  type='url' name='link' placeholder='Link'/>
        <label htmlFor='message'  style={{display: 'none'}}>Message:</label><textarea className='demosFormLabel' rows='5' type='text' name='message' placeholder='Message' style={{fontSize: '11px'}}/>
        <br/>
        <input type='submit' value='Submit' style={{width: '50%', padding: '5px', margin:'5px', border: '2px solid white', background: '#111111', color: 'white', fontWeight: 'bold'}}/>
      </form>
    </div>
  </Layout>
);

export default Demos;