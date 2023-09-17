require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const adapter = require("gatsby-adapter-netlify")

module.exports = {
  siteMetadata: {
    title: "Treasure Construction Co.,Ltd.",
    description: "Treasure Construction Co.,Ltd.",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      },
    },
  ],
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
  }),
};
