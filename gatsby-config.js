module.exports = {
  siteMetadata: {
    title: `Aaron Root`,
    titleTemplate: `Aaron Root — Product Design`,
    description: `Sydney-based Product Designer.`,
    url: `https://www.aaronroot.net`, // No trailing slash allowed!
    siteUrl: `https://www.aaronroot.net`,
    image: `/avatar.jpg`, // Path to your image you placed in the 'static' folder
    twitterUsername: `@aaroot`,
  },
  plugins: [
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
        short_name: `aaronroot`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
      },
    },
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
        path: `${__dirname}/src/content/quotes`,
        name: `quotes`,
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
          {
            name: "EB Garamond",
            file: "https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap",
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
              wrapperStyle: "margin: 48px 0;",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/photos`, `/photos/**`],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [
          {
            userAgent: "*",
            allow: "/",
            disallow: ["/photos"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            "Strict-Transport-Security: max-age=63072000; includeSubDomains; preload",
            "X-Frame-Options: DENY",
            "X-Content-Type-Options: nosniff",
            "Referrer-Policy: same-origin",
            "Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=()",
            "Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://rsms.me; img-src 'self' data: https://www.google-analytics.com; font-src 'self' data: https://fonts.gstatic.com https://rsms.me; connect-src 'self' https://api.openweathermap.org https://www.google-analytics.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none';",
          ],
        },
        mergeSecurityHeaders: false,
        mergeCachingHeaders: true,
      },
    },
  ],
};
