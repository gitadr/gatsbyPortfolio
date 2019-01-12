module.exports = {
  siteMetadata: {
    title: "Portfolio",
    siteUrl: "https://www.aaronroot.net",
    description: "Aaron Root's Portfolio",
    twitter: "@aaroot"
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
