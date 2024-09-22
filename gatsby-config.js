const { TRUE } = require("node-sass");

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
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aaron Root's Portfolio`,
        icon: `static/favicon.png`,
      },
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `content`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-RSP9V30PP5", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",

      /* Plugin options */
      options: {
        /* Font loading mode */
        mode: "async",

        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ["https://rsms.me/"],

        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "InterVariable",
            /* URL to the font CSS file with @font-face definition */
            file: "https://rsms.me/inter/inter.css",
          },
        ],
      },
    },
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
