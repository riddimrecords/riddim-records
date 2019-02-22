import React from 'react';
import Events from '../../components/events/Events';
import { pastEvents } from '../../data/events';

const Riddim1 = props => (
  <Events events={pastEvents} event={pastEvents[0]}/>
);

export default Riddim1;
