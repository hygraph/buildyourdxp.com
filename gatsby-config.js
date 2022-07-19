require(`dotenv`).config();

const siteMetadata = {
  title: `Build Your DXP`,
  description: `An open-source catalog to explore the best-of-breed microservices that power today's Digital Experience Platforms, enabling teams to deliver exceptional customer experiences at scale.`,
  keywords: `Digital Experience Platforms`,
  siteUrl: `https://buildyourdxp.com`,
  twitter: `https://twitter.com/graphcms`,
  linkedIn: `https://www.linkedin.com/company/graphcms/`,
};

module.exports = {
  siteMetadata: {
    ...siteMetadata,
    ogImage: `${siteMetadata.siteUrl}/buildyourdxp.png`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GOOGLE_TAG_MANAGER_ID,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/dxp.png`,
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff307e`,
        display: `standalone`,
      },
    },
  ],
};
