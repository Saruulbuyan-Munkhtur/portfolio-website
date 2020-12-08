module.exports = {
  siteMetadata: {
    title: `Eudaimonia Optimized`,
    description: `Portfolio Website for my Projects and Blogs`,
    author: `Saruulbuyan Munkthur`,
  },
  plugins: [
    'gatsby-image',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eudaimonia Optimized`,
        short_name: `Eudimized`,
        start_url: `/`,
        background_color: `#eeecf1`,
        theme_color: `#2e8b57`,
        display: `minimal-ui`,
        icon: `src/images/social_app.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `@micalgenus/gatsby-plugin-github-avatar`,
      options: {
        username: `erozionzeal`, // Github username
        default: 12954607, // Github userid for default image
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-XXXXXXXXX-X',
      },
    }, 
  ]
}
