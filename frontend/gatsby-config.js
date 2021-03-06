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
        src: "//cdn.social9.com/js/socialshare.min.js"
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
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337" || "https://eudaimonia-optimized.herokuapp.com",
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-FXBW53WL9J", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ]
}
