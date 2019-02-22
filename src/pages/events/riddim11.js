import React from 'react';
import Events from '../../components/events/Events';
import { upcomingEvents } from '../../data/events';

const Riddim11 = props => (
  <Events events={upcomingEvents} event={upcomingEvents[0]}/>
);

export default Riddim11;
