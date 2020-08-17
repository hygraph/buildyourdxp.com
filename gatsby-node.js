const fs = require("fs");
const path = require("path");
const slugify = require("@sindresorhus/slugify");

const templatesDir = path.resolve(__dirname, "src", "templates");
const pageTemplate = (fileName) => path.resolve(templatesDir, fileName);

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

  pages.forEach(async (page) => {
    const { id, slug } = page;

    const fileName = pageTemplate(`${slug}-template.js`);
    const templateExists = await fs.existsSync(fileName);
    const component = templateExists
      ? fileName
      : pageTemplate("page-template.js");

    createPage({
      path: slug === "home" ? `/` : `/${slug}`,
      component,
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
