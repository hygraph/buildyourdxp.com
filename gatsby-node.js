const slugify = require("@sindresorhus/slugify");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const {
    data: {
      allGraphCmsPage: { nodes: pages },
    },
  } = await graphql(
    `
      fragment assetData on GraphCMS_Asset {
        id
        url
      }

      {
        allGraphCmsPage {
          nodes {
            id
            slug
            seoTitle
            seoDescription
            seoFocusKeywords
            seoImage {
              ...assetData
            }
            seoImageAltText
          }
        }
      }
    `
  );

  pages.forEach((page) => {
    const { id, slug } = page;

    createPage({
      path: slug === "home" ? `/` : `/${slug}`,
      component: require.resolve(
        slug === "home"
          ? `./src/templates/HomeTemplate.js`
          : `./src/templates/PageTemplate.js`
      ),
      context: {
        id,
        page,
      },
    });
  });
};

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    GraphCMS_Category: {
      slug: {
        type: "String",
        resolve: ({ title }) => slugify(title, { lower: true }),
      },
    },

    GraphCMS_Tool: {
      formattedUrl: {
        type: "String",
        resolve: ({ url }) =>
          url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0],
      },
    },
  };

  createResolvers(resolvers);
};
