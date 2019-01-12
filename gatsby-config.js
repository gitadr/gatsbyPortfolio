module.exports = {
  siteMetadata: {
    title: "Aaron · Sydney-based product designer",
    titleTemplate: "%s · Portfolio",
    description:
      "Hello, I'm Aaron. A Sydney-based product designer specialising in clean interfaces, data-driven prototypes and scalable design systems",
    url: "https://aaronroot.net", // no trailing slash!
    image: "/images/favicon.jpg",
    owner: "Aaron Root",
    twitterUsername: "@aaroot"
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
