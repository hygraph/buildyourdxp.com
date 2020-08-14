import React from "react";
import { graphql } from "gatsby";
import Markdown from "markdown-to-jsx";

import Header from "../components/Header";
import TableOfContents from "../components/TOC";

export default function IndexPage({
  data: {
    graphCmsPage,
    allGraphCmsCategory: { nodes: categories },
  },
}) {
  const { content } = graphCmsPage;

  return (
    <React.Fragment>
      <Header {...graphCmsPage} />

      <section className="py-6 md:py-12 bg-gray-50 ">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <div className="md:flex -mx-6">
              <div className="hidden md:block md:w-1/5 px-6">
                <div className="pt-12 pb-7 border-b border-gray-200">
                  <h2 className="text-2xl leading-8 font-semibold tracking-tight font-display text-gray-900  sm:leading-9">
                    DXP Components
                  </h2>
                </div>

                <div className="pt-6 sticky top-0">
                  <TableOfContents items={categories} />
                </div>
              </div>

              <div className="md:w-4/5 lg:max-w-3xl mx-auto px-6 prose">
                <Markdown children={content} />

                {categories.map(
                  ({
                    title,
                    slug,
                    description,
                    referralText,
                    referralLink,
                  }) => (
                    <div key={slug}>
                      <h3 id={slug}>{title}</h3>

                      <Markdown children={description} />

                      {referralText && referralLink && (
                        <p>
                          <a
                            href={`/#${referralLink}`}
                            className="inline-flex items-center"
                          >
                            {referralText}
                            <span className="ml-1">
                              <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z" />
                              </svg>
                            </span>
                          </a>
                        </p>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query ComponentsPageQuery($id: String!) {
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
        description
        referralText
        referralLink
      }
    }
  }
`;
