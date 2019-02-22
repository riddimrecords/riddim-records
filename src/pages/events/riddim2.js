import React from 'react';
import Events from '../../components/events/Events';
import { pastEvents } from '../../data/events';

const Riddim2 = props => (
  <Events events={pastEvents} event={pastEvents[1]}/>
);

export default Riddim2;
