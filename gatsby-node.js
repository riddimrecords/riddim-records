// const { pastEvents, upcomingEvents } = require('./src/data/events.js');
const { artists } = require('./src/data/artists');
const { releases } = require('./src/data/releases');

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    query {
      allPasteventsJson {
        edges {
          node {
            name
          }
        }
      }
      allUpcomingeventsJson {
        edges {
          node {
            name
          }
        }
      }
    }
  `);

  if (results.error) {
    console.error('Something went wrong');
    return;
  }

  results.data.allPasteventsJson.edges.forEach((edge) => {
    const event = edge.node;
    createPage({
      path: `/events/${event.name}/`,
      component: require.resolve('./src/templates/event.js'),
      context: { name: event.name, type: 'past' },
    });
  });

  results.data.allUpcomingeventsJson.edges.forEach((edge) => {
    const event = edge.node;
    createPage({
      path: `/events/${event.name}/`,
      component: require.resolve('./src/templates/event.js'),
      context: { name: event.name, type: 'upcoming' },
    });
  });

  artists.forEach((artist) => {
    createPage({
      path: `/artists/${artist.key}`,
      component: require.resolve('./src/templates/artist.js'),
      context: { artist },
    });
  });

  releases.forEach((release) => {
    createPage({
      path: `/music/releases/${release.key}`,
      component: require.resolve('./src/templates/release.js'),
      context: { release },
    });
  });
};
