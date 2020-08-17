import React from "react";
import { graphql } from "gatsby";

import Header from "../components/Header";
import TableOfContents from "../components/TOC";
import Category from "../components/Category";

export default function IndexPage({
  data: {
    graphCmsPage,
    allGraphCmsCategory: { nodes: categories },
  },
}) {
  return (
    <React.Fragment>
      <Header {...graphCmsPage} />

      <section className="py-6 lg:py-12 bg-gray-50 ">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <div className="lg:flex -mx-6">
              <div className="hidden lg:block lg:w-1/5 px-6">
                <div className="pt-12 pb-7 border-b border-gray-200">
                  <h2 className="text-2xl leading-8 font-semibold tracking-tight font-display text-gray-900  sm:leading-9">
                    DXP Components
                  </h2>
                </div>

                <div className="pt-6 sticky top-0">
                  <TableOfContents items={categories} />
                </div>
              </div>
              <div className="lg:w-4/5 px-6">{categories.map(Category)}</div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query HomePageQuery($id: String!) {
    graphCmsPage(id: { eq: $id }) {
      title
      subTitle
      content
      ctaText
      ctaTo
      coverImage {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1120) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    allGraphCmsCategory {
      nodes {
        id
        title
        slug
        tools {
          id
          name
          url
          formattedUrl
          logo {
            width
            height
            handle
            url
          }
        }
      }
    }
  }
`;
