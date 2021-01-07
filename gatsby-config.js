module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-J163PKZYL9",
      },
    },
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
