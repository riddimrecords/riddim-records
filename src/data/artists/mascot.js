import React from 'react';
import mascotPic from '../../images/artists/MascotSquare.jpg';

const info = (<div style={{fontSize: '18px'}}>
    <p>
      Hailing from Cardiff, Max Scott aka Mascot began his journey into the world 
      of drum and bass at an early age. Gripped by the sounds of his inspirations 
      Ed Rush &amp; Calyx and Teebee, the Welshman's passion for music spilled over 
      into DJing in his early teens. Now recognized for his signature blend of deep n' 
      dark dnb, Mascot consistently brings an electric energy to his performances.
    </p>
    <p>
      Mascot's versatility as a DJ has allowed him to support some of drum and bass's 
      finest and most established talents, notably; Alix Perez, Bou, Emperor, Hybrid 
      Minds, Kasra, Kings of the Rollers, Lenzman, Levela, LSB, Macky Gee &amp; Phantasy.
    </p>
    <p>
      Pursuing his passion for the fast-paced genre even further, Mascot began designing 
      his own brand Riddim Records. The company launched in 2016 and has gone from 
      strength-to-strength to quickly become one of the UK's fastest growing independent 
      drum and bass brands. With performances across the UK and internationally, Riddim 
      Records has already left an imprint on the scene, laying a strong foundation for 
      future success with sights set high among the biggest and best drum and bass brands.
    </p>
    <p>
      For bookings, please contact: <a style={{color: 'white'}} href='mailto:ben@riddimrecords.co.uk'>Ben@riddimrecords.co.uk</a>
    </p>
</div>);

const mascot = {
  key: 'mascot',
  name: 'Mascot',
  social: {
    soundcloud: 'https://soundcloud.com/djmascot',
    facebook: 'https://www.facebook.com/mascotmusic/', 
    instagram: 'https://instagram.com/mascotdnb', 
    aor: 'https://soundcloud.com/riddimrecordsuk/aor-mascot-promo',
  },
  info: info,
  pic: mascotPic,
};

export default mascot;