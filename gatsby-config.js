require("dotenv").config({
  path: `.env`,
});

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
    //`gatsby-plugin-page-transitions`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        background: '#1f9c8d',
        background_color: '#1f9c8d',
        // Height of the scroll indicator
        height: "3px",
        // Configure paths where the scroll indicator will appear
        paths: ["/blog/**", "/blogs"],
        // Configure the z-index of the indicator element
        zIndex: `9999`,
      },
    },
    // {
		//   resolve:  require.resolve(`${__dirname}/src/components/postTemplate`),
    // },
    
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        id: "s9-sdk",
        async: true,
        defer: true,
        content: "df5c8cc5a19443cc8e193ef1df65bb0f",
        src: "socialshare.min.js"
      },
    },
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
        background_color: `#ffffff`,
        theme_color: `#1f9c8d`,
        display: `minimal-ui`,
        icon: `src/assets/geometric_hexagon.svg`, // This path is relative to the root of the site.
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
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: [
          'article',
          'category',
        ],
        singleTypes: [
          'homepage',
          'global',
        ],
        queryLimit: 1000,
      },
    },
  ]
}
