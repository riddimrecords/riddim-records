import React from 'react';
import Events from '../../components/events/Events';
import { upcomingEvents } from '../../data/events';

const Riddim12 = props => (
  <Events events={upcomingEvents} event={upcomingEvents[1]}/>
);

export default Riddim12;
