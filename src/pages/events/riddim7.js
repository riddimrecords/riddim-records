import React from 'react';
import Events from '../../components/events/Events';
import { pastEvents } from '../../data/events';

const Riddim7 = props => (
  <Events events={pastEvents} event={pastEvents[6]}/>
);

export default Riddim7;
