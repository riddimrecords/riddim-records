import React from 'react';
import Events from '../../components/events/Events';
import { upcomingEvents } from '../../data/events';

const Riddim13 = props => (
  <Events events={upcomingEvents} event={upcomingEvents[2]}/>
);

export default Riddim13;
