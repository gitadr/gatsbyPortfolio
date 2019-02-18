module.exports = {
  siteMetadata: {
    title: `Aaron Root`,
    titleTemplate: `%s · Portfolio`,
    description: `Sydney-based product designer specialising in clean interfaces, data-driven prototypes and scalable design systems`,
    url: `https://www.aaronroot.net`, // No trailing slash allowed!
    image: `/avatar.jpg`, // Path to your image you placed in the 'static' folder
    twitterUsername: `@aaroot`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-favicon",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/articles`,
        name: `articles`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/notes`,
        name: `notes`
      }
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-46089139-1`,
        // Puts tracking script in the head instead of the body
        head: false
      }
    }
  ]
};
