import React from "react";
import Markdown from "markdown-to-jsx";

import Header from "../components/Header";
import { graphql } from "gatsby";

function PageTemplate({ data: { graphCmsPage } }) {
  const { content } = graphCmsPage;

  return (
    <React.Fragment>
      <Header {...graphCmsPage} />

      <section className="py-6 md:py-12 bg-gray-50 ">
        <div className="md:max-w-3xl mx-auto prose">
          <Markdown children={content} />
        </div>
      </section>
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query PageQuery($id: String!) {
    graphCmsPage(id: { eq: $id }) {
      title
      subTitle
      content
      ctaText
      ctaTo
      coverImage {
        localFile {
          childImageSharp {
            fluid(maxWidth: 560) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default PageTemplate;
