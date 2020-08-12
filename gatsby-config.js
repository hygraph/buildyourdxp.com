require("dotenv").config();

const siteMetadata = {
  title: "Build Your DXP",
  description: "",
  keywords: "",
  siteUrl: "https://buildyourdxp.com",
  twitter: "https://twitter.com/graphcms",
  linkedIn: "https://www.linkedin.com/company/graphcms/",
};

module.exports = {
  siteMetadata: {
    ...siteMetadata,
    ogImage: `${siteMetadata.siteUrl}/buildyourdxp.png`,
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GOOGLE_TAG_MANAGER_ID,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: "gatsby-source-graphcms",
      options: {
        downloadLocalImages: true,
        endpoint: process.env.GRAPHCMS_ENDPOINT,
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
