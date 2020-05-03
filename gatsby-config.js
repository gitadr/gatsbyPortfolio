module.exports = {
  siteMetadata: {
    title: `Aaron Root`,
    titleTemplate: `Aaron Root — Product Design`,
    description: `Sydney-based product designer specialising in clean interfaces, data-driven prototypes and scalable design systems`,
    url: `https://www.aaronroot.net`, // No trailing slash allowed!
    image: `/avatar.jpg`, // Path to your image you placed in the 'static' folder
    twitterUsername: `@aaroot`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-favicon",
    "gatsby-remark-images",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/articles`,
        name: `articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/notes`,
        name: `notes`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-46089139-1`,
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 820,
              linkImagesToOriginal: false,
              wrapperStyle: "margin:48px, 0, 48px, 0;",
            },
          },
        ],
      },
    },
  ],
};
