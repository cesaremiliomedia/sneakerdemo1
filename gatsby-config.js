/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */ siteMetadata: {
    title: "Gatsby Starter - Dimension V2",
    author: "Hunter Chang",
    description: "A Gatsby.js V2 Starter based on Dimension by HTML5 UP",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
  ],
}
