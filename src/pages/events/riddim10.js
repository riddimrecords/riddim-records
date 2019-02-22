import React from 'react';
import Events from '../../components/events/Events';
import { pastEvents } from '../../data/events';

const Riddim10 = props => (
  <Events events={pastEvents} event={pastEvents[9]}/>
);

export default Riddim10;
