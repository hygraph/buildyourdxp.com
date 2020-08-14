import React from "react";
import { graphql } from "gatsby";

import Header from "../components/Header";
import ContributeForm from "../components/ContributeForm";

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
        localFile {
          childImageSharp {
            fluid(maxWidth: 1120) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default ContributeTemplate;
