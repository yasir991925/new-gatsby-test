module.exports = {
  /* Your site config here */
  flags: {
    QUERY_ON_DEMAND: false,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-svg`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/data/projects`,
      },
    },
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
  siteMetadata: {
    title: "Vision Architects and Interior Designers",
    description: `Best Architects in Lucknow`,
    copyright:
      "This website is copyright 2021 Vision Architects and Interior Designers",
  },
}
