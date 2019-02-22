import React from 'react';
import Events from '../../components/events/Events';
import { pastEvents } from '../../data/events';

const Riddim4 = props => (
  <Events events={pastEvents} event={pastEvents[3]}/>
);

export default Riddim4;
