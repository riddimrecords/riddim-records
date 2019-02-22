import React from 'react';
import Events from '../../components/events/Events';
import { pastEvents } from '../../data/events';

const Riddim9 = props => (
  <Events events={pastEvents} event={pastEvents[8]}/>
);

export default Riddim9;
