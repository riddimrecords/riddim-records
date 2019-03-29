import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Newsletter.css';

const Newsletter = () => {
  const handleInfoClick = () => {
    const info = document.querySelector('.mailChimpInfo');
    info.style.display = info.style.display === 'block' ? 'none' : 'block';
  };

  return (
    <div className="newsletter">
      <div id="mc_embed_signup" style={{ fontSize: '10px' }}>
        <form action="https://riddimrecords.us17.list-manage.com/subscribe/post?u=8706a828f346929e41c0279cd&amp;id=ed87a77b86" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <h2 style={{ display: 'inline' }}>Subscribe to our mailing list </h2>
          <div style={{ position: 'relative' }}>
            <FontAwesomeIcon icon={faInfoCircle} onClick={handleInfoClick} />
            <p className="mailChimpInfo">
              We use Mailchimp as our marketing platform.
              By clicking below to subscribe, you acknowledge
              that your information will be transferred to Mailchimp for processing.
              Learn more about Mailchimp&apos;s privacy practices
              {' '}
              <a href="https://mailchimp.com/legal/" target="_blank" rel="noopener noreferrer">here.</a>
            </p>
          </div>
          <div id="mc_embed_signup_scroll">
            <div className="inputContainer">
              <label htmlFor="mce-FNAME" style={{ display: 'none' }}>First Name </label>
              <input className="inputName" type="text" name="FNAME" id="mce-FNAME" placeholder="First Name" />
              <label htmlFor="mce-LNAME" style={{ display: 'none' }}>Last Name </label>
              <input className="inputName" type="text" name="LNAME" id="mce-LNAME" placeholder="Last Name" />
              <label htmlFor="mce-EMAIL" style={{ display: 'none' }}>Email</label>
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Email Address" />
            </div>
            <div id="mergeRow-gdpr" className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
              <div className="content__gdpr">
                <p>Select the ways you would like to hear from Riddim Records:</p>
                <fieldset style={{ border: 'none' }} className="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                  <label className="checkbox subfield" htmlFor="gdpr_26475">
                    <input type="checkbox" id="gdpr_26475" name="gdpr[26475]" value="Y" className="av-checkbox" />
                    <span>Email</span>
                    {' '}
                  </label>
                </fieldset>
              </div>
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: 'none' }} />
              <div className="response" id="mce-success-response" style={{ display: 'none' }} />
            </div>
            {' '}
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_8706a828f346929e41c0279cd_ed87a77b86" tabIndex="-1" /></div>
            <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
