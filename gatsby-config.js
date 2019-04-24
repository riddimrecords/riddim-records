module.exports = {
  siteMetadata: {
    title: 'Riddim Records',
    description: 'A UK-based record label founded on all things drum and bass.',
    author: '@mm13ah',
    url: 'https://riddimrecords.co.uk',
    lang: 'en-GB',
    keywords: ['Riddim Records', 'Drum and Bass', 'UK Label'],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/shared/icon.ico', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
  ],
};
