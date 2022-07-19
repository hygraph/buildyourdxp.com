import React from "react";
import { graphql } from "gatsby";
import Markdown from "react-markdown";

import Seo from "../components/SEO";
import Header from "../components/Header";

export const Head = () => <Seo />;

function PageTemplate({ data: { graphCmsPage } }) {
  const { content } = graphCmsPage;

  return (
    <React.Fragment>
      <Header {...graphCmsPage} />

      <section className="py-6 md:py-12 bg-gray-50">
        <div className="md:max-w-3xl mx-auto prose px-4 sm:px-6 lg:px-8">
          {content && <Markdown>{content}</Markdown>}
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
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default PageTemplate;
