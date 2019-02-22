import React from 'react';
import Events from '../../components/events/Events';
import { pastEvents } from '../../data/events';

const Riddim6 = props => (
  <Events events={pastEvents} event={pastEvents[5]}/>
);

export default Riddim6;
