exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const {
    data: {
      cms: { pages },
    },
  } = await graphql(
    `
      fragment assetData on GraphCMS_Asset {
        id
        url
        handle
        width
        height
      }

      {
        cms {
          pages {
            id
            slug
            coverImage {
              ...assetData
            }
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
