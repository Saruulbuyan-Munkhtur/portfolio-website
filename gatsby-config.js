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
    `gatsby-plugin-page-transitions`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        background: 'linear-gradient(90deg, rgba(0,212,255,1) 25%, rgba(85,226,255,1) 37%, rgba(54,213,210,1) 48%, rgba(41,207,187,1) 64%, rgba(9,50,54,1) 77%, rgba(2,0,36,1) 88%)',
        // Height of the scroll indicator
        height: "5px",
        // Configure paths where the scroll indicator will appear
        paths: ["/", "/blog/**", "/blog"],
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
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 500
      }
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
