import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

export default function SEO({
  seoTitle: title,
  seoDescription: description,
  seoFocusKeywords: keywords,
  seoImage: ogImage,
  children,
}) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          defaultKeywords: keywords
          defaultOgImage: ogImage
          siteUrl
        }
      }
    }
  `);
  const {
    defaultTitle,
    defaultDescription,
    defaultKeywords,
    defaultOgImage,
    siteUrl,
  } = siteMetadata;
  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;
  const pageOgImage = (ogImage && ogImage.url) || defaultOgImage;

  return (
    <Helmet htmlAttributes={{ lang: "en" }} defaultTitle={defaultTitle}>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta property="image" content={pageOgImage} />
      <meta
        name="google-site-verification"
        content={process.env.GATSBY_GOOGLE_SITE_VERIFICATION_CODE}
      />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:site_name" content="Build Your DXP" />
      <meta property="og:image" content={pageOgImage} />
      <meta name="og:type" content="website" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:src" content={pageOgImage} />

      {children}
    </Helmet>
  );
}
