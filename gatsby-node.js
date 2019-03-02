const { pastEvents, upcomingEvents } = require('./src/data/events.js');
const { artists } = require('./src/data/artists');
const { releases } = require('./src/data/releases');

exports.createPages = ({ actions: { createPage } }) => {

  pastEvents.forEach(event => {
    createPage({
      path: `/events/${event.name}/`,
      component: require.resolve("./src/templates/event.js"),
      context: { event, events: pastEvents },
    })
  })

  upcomingEvents.forEach(event => {
    createPage({
      path: `/events/${event.name}/`,
      component: require.resolve("./src/templates/event.js"),
      context: { event, events: upcomingEvents },
    })
  })

  artists.forEach(artist => {
    createPage({
      path: `/artists/${artist.key}`,
      component: require.resolve("./src/templates/artist.js"),
      context: { artist },
    })
  })

  releases.forEach(release => {
    createPage({
      path: `/music/releases/${release.key}`,
      component: require.resolve("./src/templates/release.js"),
      context: { release },
    })
  })
}
