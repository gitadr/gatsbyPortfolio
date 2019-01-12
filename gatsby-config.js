// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-46089139-1",
        // Puts tracking script in the head instead of the body
        head: false
      }
    }
  ]
};
