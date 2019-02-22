import React from 'react';
import rr001Cover from '../../images/releases/rr001Cover.jpg';

const info = (<div>
  <p>The team from Riddim Records have been working tirelessly behind the scenes 
    on their first ever release, and it's a big one. Collating the sounds of three 
    of the most promising up-and-comers the drum and bass scene has right now in 
    an action-packed, 3-track E.P under the title Episode 1 ('Ep. 1'). RR's first 
    release hopes to show the diversity that Riddim Records strives to push forward 
    through working with tracks from across the drum and bass spectrum.</p>
  <p>The E.P. begins with the sounds of Leeds-based artist Dbrief, who sets us up 
    with his track "All The 9's". The track infuses a clear Jungle influence, 
    coupled with a classic Hip-Hop groove. A fresh and recognizable track from the 
    liquid specialist himself.</p>
  <p>The second track, created by artist Thread, reflects his unique and 
    forward-thinking approach to drum and bass. 'Mindless' offers its listeners 
    a dark and experimental journey that so perfectly describes its creators taste 
    in the fast-paced genre.</p>
  <p>Ep. 1's final track comes from Norwegian artist Yassily. Inherently a techno 
    artist, Yassily's creation 'Expression' provides something a little bit 
    different to the E.P with his hard-hitting sound ending the E.P. with something 
    to get your feet moving.</p>
</div>);

const rr001 = {
  key: 'rr001',
  name: 'RR001',
  releaseDate: '08.06.18',
  info: info,
  pic: rr001Cover,
  soundcloud: <iframe title="RR01" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/500034594&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>,
  fanlink: 'https://fanlink.to/RR001'
};

export default rr001;