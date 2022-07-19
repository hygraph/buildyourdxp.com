import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/SEO";
import Header from "../components/Header";
import ContributeForm from "../components/ContributeForm";

export const Head = () => <Seo />;

function ContributeTemplate({ data: { graphCmsPage } }) {
  return (
    <React.Fragment>
      <Header {...graphCmsPage} />

      <section className="py-6 md:py-12 bg-gray-50">
        <div className="md:max-w-xl mx-auto prose px-4 sm:px-6 lg:px-8">
          <ContributeForm />
        </div>
      </section>
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query ContributePageQuery($id: String!) {
    graphCmsPage(id: { eq: $id }) {
      title
      subTitle
      ctaText
      ctaTo
      coverImage {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default ContributeTemplate;
