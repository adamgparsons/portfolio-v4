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
  ],
}
