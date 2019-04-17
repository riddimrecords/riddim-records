import React from 'react';
import riddimImg from '../images/shared/riddim.png';
import riddimRecordsImg from '../images/shared/riddimRecords.png';

const riddim = {
  name: 'Riddim',
  info:
  <div>
    <p>
      Riddim is an events company specializing in all things drum and bass.
      Since its humble beginnings in 2016, the brand has quickly gone from
      strength-to-strength to become one of the UK&apos;s most promising drum
      and bass event brands.
    </p>
    <p>
    The brand&apos;s ethos is simple - to host the best events while also
    providing local talent with a platform to support some of the most
    successful drum and bass artists in the industry.
    </p>
  </div>,
  logo: riddimImg,
};

const riddimRecords = {
  name: 'Riddim Records',
  info:
  <div>
    <p>
      Riddim Records, the sister company to Riddim, is an exciting and
      innovative UK-based label, striving to discover the freshest and
      best sounds emerging in the ever-evolving drum and bass scene.
    </p>
    <p>
      Riddim Records has huge plans in the pipeline and sights set high
      on a seat among the biggest and best labels in drum and bass.
    </p>
  </div>,
  logo: riddimRecordsImg,
};

export default [riddim, riddimRecords];
