const pastEvents = require('./pastevents.json');
const upcomingEvents = require('./upcomingevents.json');

// const date = new Date();
// const day = date.getDate();
// const month = date.getMonth() + 1;
// const year = Number(String(date.getFullYear()).slice(2, 5));

// for (let i = 0; i < events.length; i += 1) {
//   const dateArr = events[i].date.split('.');
//   if (Number(dateArr[2]) > year) {
//     upcomingEvents.push(events[i]);
//   } else if (Number(dateArr[2]) === year && Number(dateArr[1]) > month) {
//     upcomingEvents.push(events[i]);
//   } else if (Number(dateArr[2]) === year && Number(dateArr[1]) === month
//       && Number(dateArr[0]) >= day) {
//     upcomingEvents.push(events[i]);
//   } else {
//     pastEvents.push(events[i]);
//   }
// }

module.exports = { pastEvents, upcomingEvents };
