import React from 'react';
import Events from '../../components/events/Events';
import { pastEvents } from '../../data/events';

const Riddim8 = props => (
  <Events events={pastEvents} event={pastEvents[7]}/>
);

export default Riddim8;
