import React from 'react';
import Events from '../../components/events/Events';
import { pastEvents } from '../../data/events';

const Riddim5 = props => (
  <Events events={pastEvents} event={pastEvents[4]}/>
);

export default Riddim5;
