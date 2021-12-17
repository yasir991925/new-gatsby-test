/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-svg`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Inter", "Neutral Face"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
  ],
}
