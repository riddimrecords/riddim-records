import React from 'react';
import reloadPic from '../../images/artists/ReloadSquare.jpg';

const info = (<div>
  <p>
    Since his explosion into the drum and bass scene in 2016, Reload has quickly established 
    himself as one of Cardiff's finest and highest demand DJs. The high-energy artist has built 
    himself an impressive portfolio through supporting some of drum and bass's most well-known 
    artists, taking up a residency at nearly every drum and bass brand in the Welsh capital. 
  </p>
  <p>
    Joining the ranks of the Riddim Records artist collective in 2017, Reload has represented 
    the brand up and down the UK and will continue to tear up dance-floors for the foreseeable future.
  </p>

</div>);

const reload = {
  key: 'reload',
  name: 'Reload',
  social: {
    soundcloud: 'https://soundcloud.com/jdreload',
    facebook: 'https://www.facebook.com/djreloadwales/',
    aor: 'https://soundcloud.com/riddimrecordsuk/aor-reload-promo',
  },
  info: info,
  pic: reloadPic,
};

export default reload;