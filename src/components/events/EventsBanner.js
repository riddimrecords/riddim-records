import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PrevEvent from './PrevEvent';
import NextEvent from './NextEvent';
import eventProps from './eventProps';

const EventsBanner = (props) => {
  const { event, events } = props;
  const cols = events.length + 2;
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
    <EventsBannerDiv style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      <PrevEvent event={event} events={events} />
      {events.map(e => (
        <Link key={`${e.node.key}`} to={`/events/${e.node.name}`}>
          <div className="eventBannerImg">
            <Img fluid={e.node.poster.childImageSharp.fluid} alt={`${e.node.name} link`} />
          </div>
        </Link>
      ))}
      <NextEvent event={event} events={events} />
    </EventsBannerDiv>
  );
};

EventsBanner.propTypes = eventProps;

export default EventsBanner;
