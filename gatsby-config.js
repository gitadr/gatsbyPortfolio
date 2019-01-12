module.exports = {
  siteMetadata: {
    defaultTitle: "Portfolio",
    titleTemplate,
    siteUrl: "https://www.aaronroot.net",
    defaultDescription: "Aaron Root's Portfolio",
    twitterUsername: "@aaroot",
    defaultImage: "images/favicon.ico"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-46089139-1",
        // Puts tracking script in the head instead of the body
        head: false
      }
    }
  ]
};
