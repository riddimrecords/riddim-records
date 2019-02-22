import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PrevEvent from './PrevEvent';
import NextEvent from './NextEvent';

const EventsBanner = (props) => {
  const cols = props.events.length + 2;
  const EventsBannerDiv = styled.div`
    margin: auto;
    width: ${cols >= 10 ? '60vw' : '30vw'};
    display: grid;
    grid-template-rows: 100px;
    grid-column-gap: ${cols >= 10 ? '10px' : '20px'};
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 992px) {
      display: none;
    }
  `;
  return (
    <EventsBannerDiv style={{gridTemplateColumns: `repeat(${cols}, 1fr)`}}>
      <PrevEvent event={props.event} events={props.events}/>
      {props.events.map(event => {
        return (
          <Link key={`${event.key}`} to={`/events/${event.name}`}>
            <div className='eventBannerImg'>
              <img src={event.poster} alt={`${event.name} link`} style={{maxWidth: '100%'}}/>
            </div>
          </Link>
        );
      })}
      <NextEvent event={props.event} events={props.events}/>
    </EventsBannerDiv>
  );
};

export default EventsBanner;