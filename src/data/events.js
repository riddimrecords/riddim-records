// const graphql = require('graphql');
// const riddim1Poster = require('../images/events/Riddim1.jpg');
// const riddim2Poster = require('../images/events/Riddim2.jpg');
// const riddim3Poster = require('../images/events/Riddim3.jpg');
// const riddim4Poster = require('../images/events/Riddim4.jpg');
// const riddim5Poster = require('../images/events/Riddim5.jpg');
// const riddim6Poster = require('../images/events/Riddim6.jpg');
// const riddim7Poster = require('../images/events/Riddim7.jpg');
// const riddim8Poster = require('../images/events/Riddim8.jpg');
// const riddim9Poster = require('../images/events/Riddim9.jpg');
// const riddim10Poster = require('../images/events/Riddim10.jpg');
// const riddim11Poster = require('../images/events/Riddim11.jpg');
// const riddim12Poster = require('../images/events/Riddim12.jpg');
// // const riddim13aPoster = require('../images/events/Riddim13a.jpg';
// const riddim13bPoster = require('../images/events/Riddim13b.jpeg');

const riddim1 = {
  key: 1,
  name: 'riddim1',
  poster: 'Riddim1.jpg',
  date: '23.06.17',
  info: "Riddim launches with the head of Multi-Function music 'Levela'. Riddim hopes to bring a variety Cardiff's drum and bass scene, while providing local talent with a chance to perform in a professional setting beside some of their favorite headliners.",
  artists: ['Levela', 'DJ Low ft. MC Chew', 'Mowgli', 'DJ Reload B2B Luke Ebbens', 'Mascot', 'Hosted by MC XL'],
  location: "<iframe height='90%' width='90%' title='map' src='https://maps.google.com/maps?q=114-116%20hodge%20house&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=&amp;output=embed'/>",
};

const riddim2 = {
  key: 2,
  name: 'riddim2',
  poster: 'Riddim2.jpg',
  date: '08.09.17',
  info: 'Our next installment of Riddim brings something new to the table. Teaming up with the guys from Flatline, September 8th will be a night to remember with new MCs, new DJs and a new sound system that will blow your mind. ',
  artists: ['Bou', 'Reload B2B Je3', 'Ebbens vs Calamity ft. PKT', 'Low vs Mowgli ft. Chew', 'Mascot vs Oni', 'Hosted by Chew, MC XL & PKT'],
  location: "<iframe height='90%' width='90%' title='map' src='https://maps.google.com/maps?q=114-116%20hodge%20house&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=&amp;output=embed'/>",
};

const riddim3 = {
  key: 3,
  name: 'riddim3',
  poster: 'Riddim3.jpg',
  date: '24.02.18',
  info: "After a sold out opening-event last year, York's only dedicated Drum & Bass night returns alongside Cardiff-based team Riddim. This time around we're bringing the mighty Halogenix to York. 1/3rd of Ivy Lab with solo releases on Critical Music, Alix Perez's 1985 Music and many more; Halogenix has placed himself firmly amongst the DnB elite.",
  artists: ['Halogenix', 'Low:r', 'Rous', 'Mascot', 'Horton', 'Thread', 'Hosted by MC Subliminal & MC LD'],
  location: "<iframe height='90%' width='90%' title='map' src='https://maps.google.com/maps?q=Mansion%20Underground%2053-55%20Micklegateom&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed'/>",
};

const riddim4 = {
  key: 4,
  name: 'riddim4',
  poster: 'Riddim4.jpg',
  date: '23.03.18',
  info: "After a few months of careful planning and silence, Riddim is back for another season of events for 2018. Riddim's main aim this year is to provide the Cardiff drum & bass scene with a bit of variety! We're therefore incredibly proud to bring you one of the biggest names in liquid-drum and bass right now, Best Producer and Best Album nominee at the drum and bass awards (2017), the one and only... Hybrid Minds!",
  artists: ['Hybrid Minds', 'Mascot', 'Entakah', 'JuicE', 'Ebbens', 'Sker', 'Hosted by MC XL'],
  location: "<iframe height='90%' width='90%' title='map' src='https://maps.google.com/maps?q=114-116%20hodge%20house&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=&amp;output=embed'/>",
};

const riddim5 = {
  key: 5,
  name: 'riddim5',
  poster: 'Riddim5.jpg',
  date: '25.05.18',
  info: "Our second-Cardiff event of the 2018 season follows our ethos of bringing diversity to Cardiff's thriving drum and bass scene. After the huge success of our first event, we are proud to bring you Critical King's - Emperor and Kasra. This is also a very special event as we'll be witness to Emperor's EP launch, forthcoming on Critical Music, in an action-packed 90 minute set!",
  artists: ['Emperor', 'Kasra', 'Mascot', 'Mowgli', 'Rous', 'Hosted by MC XL'],
  location: "<iframe height='90%' width='90%' title='map' src='https://maps.google.com/maps?q=114-116%20hodge%20house&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=&amp;output=embed'/>",
};

const riddim6 = {
  key: 6,
  name: 'riddim6',
  poster: 'Riddim6.jpg',
  date: '20.07.18',
  info: "Our final event of Riddim's 2018 season brings something very special and close to home. Bringing you the sounds of 2 of the UK's most promising DJ's, residents with numerous brands and easily some of the most inspiring talent the scene has to offer; DJ Low and Sinu8. This is a very special event as we'll be witness to DJ Low's first headline gig vs. England's no.1 upcoming DJ, Sinu8!",
  artists: ['Low vs Sinu8', 'Bass Phase', 'Obsidian', 'Ebbens', 'Mascot', 'Hosted by PKT'],
  location: "<iframe height='90%' width='90%' title='map' src='https://maps.google.com/maps?q=114-116%20hodge%20house&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=&amp;output=embed'/>",
};

const riddim7 = {
  key: 7,
  name: 'riddim7',
  poster: 'Riddim7.jpg',
  date: '05.10.18',
  info: 'After a successful collaboration event with our brothers over at Terra Firma, Riddim is hosting its first solo York-based event with none other than the liquid-kingpins, Hybrid Minds! With a string of sell-out shows on their international tour, Hybrid Minds are back in the UK to make their York-debut in none other than Fibbers, with special guests Deadline & Aperio joining the line-up.',
  artists: ['Hybrid Minds', 'Dbrief', 'Mascot', 'Thread', 'Deadline & Aperio', 'Hosted by MC Subliminal'],
  location: "<iframe height='90%' width='90%' title='map' src='https://maps.google.com/maps?q=Fibbers%203-5%20Toft%20Green&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed'/>",
};

const riddim8 = {
  key: 8,
  name: 'riddim8',
  poster: 'Riddim8.jpg',
  date: '02.11.18',
  info: "Room 2 // Riddim Records - Joining us in Room 2, we have one of the UK's fastest growing independent drum and bass brands bringing their signature, cross-spectrum sound. Expanding out of Cardiff, Riddim Records are venturing to cities across the UK with their unique style and energy.",
  artists: ['Alf', 'Archa', 'Dbrief', 'Mascot', 'Skinny', 'Thread'],
  location: "<iframe height='90%' width='90%' title='map' src='https://maps.google.com/maps?q=Mint%20Warehouse%20Aquatite%20House%20Water%20Ln&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed'/>",
};

const riddim9 = {
  key: 9,
  name: 'riddim9',
  poster: 'Riddim9.jpg',
  date: '03.11.18',
  info: 'After successful events in both York and Cardiff, Riddim is making its way to Swansea for their launch night event with the mighty Annix!',
  artists: ['Annix', 'Lowgli', 'Ebbens', 'Mascot', 'Noski', 'Hosted by MC XL'],
  location: "<iframe height='90%' width='90%' title='map' src='https://maps.google.com/maps?q=The%20Hangar%2050%20Plymouth%20St&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed'/>",
};

const riddim10 = {
  key: 10,
  name: 'riddim10',
  poster: 'Riddim10.jpg',
  date: '28.12.18',
  info: "2018 has been a wonderful year for us here at Riddim, and we can't wait for 2019! We've had the privilege of working with some of the biggest names in drum and bass, as well as some of the amazing talents that Leeds, York, Swansea and Cardiff have to offer. Thus, to end the year, we're bringing you one of drum and bass's most influential and profound artists whose sound has reached all four corners of the globe. We present to you, the mighty... LSB!",
  artists: ['LSB', 'Lubi J', 'Ransom', 'Dbrief', 'Mascot', 'Hosted by MC XL'],
  location: "<iframe height='90%' width='90%' title='map' src='https://maps.google.com/maps?q=114-116%20hodge%20house&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=&amp;output=embed'/>",
};

const riddim11 = {
  key: 11,
  name: 'riddim11',
  poster: 'Riddim11.jpg',
  date: '19.04.19',
  info: "After an already energetic year, Riddim launches its first solo event of 2019 in the wonderful Clwb Ifor Bach. Bringing you the sounds of the incredible... Technimatic! Hosted by MC Lowqui! We feel truly humbled to be asked to host the Cardiff-leg of Technimatic's album launch tour, and this event is definitely going to be something special.",
  artists: ['Technimatic ft. LowQui Mc', 'Benji', 'Wink', 'Plethora', 'Psybrations', 'Hosted by MC XL + Lowqui'],
  location: "<iframe height='90%' width='90%' title='map' src='https://maps.google.com/maps?q=Clwb%20ifor%20Bach&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed'/>",
};

const riddim12 = {
  key: 12,
  name: 'riddim12',
  poster: 'Riddim12.jpg',
  date: '15.06.19',
  info: "Jungle Jam makes its way down to Cardiff for one of its biggest events of the year! Bringing their Jungle flavors with an immersive day party at one of Cardiff's most beloved venues - Tramshed. With a huge line up, music across 2 rooms, and food served throughout the day, we can't wait for this one!",
  artists: ['Ray Keith B2B Bladerunner ft Navigator MC', 'Serum & Inja', 'Randall ft. MC Fearless', 'Unglued (Jungle set)', 'Kenny Ken & Ragga Twins', 'Hybrid B2B Lavery ', 'Deadline (Jungle Set)', 'Kumarachi', 'Mascot b2b Benji (Riddim Records)', 'Hosted by Navigator, Fearless, Inja, XL + Ragga Twins'],
  location: "<iframe height='90%' width='90%' title='map' src='https://maps.google.com/maps?q=Tramshed%20Cardiff&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed'/>",
};

const riddim13 = {
  key: 13,
  name: 'riddim13',
  poster: 'Riddim13b.jpeg',
  date: '05.07.19',
  info: "Riddim Records is one of the UK's fastest growing independent drum and bass brands bringing their signature, cross-spectrum sound. Expanding out of Cardiff, Riddim Records are venturing to cities across the UK with their unique style and energy.",
  artists: [],
  location: "<iframe height='90%' width='90%' title='map' src='https://maps.google.com/maps?q=eastnor%20castle%20deer%20park&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed'/>",
};

const events = [riddim1, riddim2, riddim3, riddim4, riddim5, riddim6,
  riddim7, riddim8, riddim9, riddim10, riddim11, riddim12, riddim13];

const pastEvents = [];
const upcomingEvents = [];

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = Number(String(date.getFullYear()).slice(2, 5));

for (let i = 0; i < events.length; i += 1) {
  const dateArr = events[i].date.split('.');
  if (Number(dateArr[2]) > year) {
    upcomingEvents.push(events[i]);
  } else if (Number(dateArr[2]) === year && Number(dateArr[1]) > month) {
    upcomingEvents.push(events[i]);
  } else if (Number(dateArr[2]) === year && Number(dateArr[1]) === month
      && Number(dateArr[0]) >= day) {
    upcomingEvents.push(events[i]);
  } else {
    pastEvents.push(events[i]);
  }
}

module.exports = { pastEvents, upcomingEvents, events };
