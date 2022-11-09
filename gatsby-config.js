/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-subsocial`,
      options: {
        substrateNodeUrl: `wss://para.subsocial.network`,
        ipfsNodeUrl: `https://app.subsocial.network/ipfs`,
        recommendedSpaceIds: ["1", "1001", "1002", "10316"],
        addressAccount: "3sD7b8HxT2rg8SNhgZZcgG3bSffVLq5drAvDqDfM8CJ6SU6x"
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `https://subsocial.ghost.io`,
        contentApiKey: `c93b8a90e3dc957163543dbb1b`,
        version: `v5.0`, // Ghost API version, optional, defaults to "v5.0".
        // Pass in "v4.0" if your Ghost install is not on 5.0 yet!!!
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
