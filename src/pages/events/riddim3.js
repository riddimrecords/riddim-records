import React from 'react';
import Events from '../../components/events/Events';
import { pastEvents } from '../../data/events';

const Riddim3 = props => (
  <Events events={pastEvents} event={pastEvents[2]}/>
);

export default Riddim3;
