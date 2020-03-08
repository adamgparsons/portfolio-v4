module.exports = {
  siteMetadata: {
    title: `Adam Parsons`,
    description: `I’m a UX Designer & Developer based in London. I enjoy designing and building interfaces that solve user problems.`,
    author: `Adam Parsons`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-catch-links",
    `gatsby-plugin-styled-components`,

    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "mgv5mlk",
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [`gatsby-remark-copy-images`], // just in case those previously mentioned remark plugins sound cool :)
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 620,
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
        theme_color: `#663399`,
        display: `minimal-ui`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
