import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Seo = ({
  title,
  description,
  pathname = "",
  image,
  type = "website",
  jsonLd,
  children,
  noindex = false,
}) => {
  const { site } = useStaticQuery(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          twitterUsername
        }
      }
    }
  `);

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    image: defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    image: image
      ? image.startsWith("http")
        ? image
        : `${siteUrl}${image}`
      : `${siteUrl}${defaultImage}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={defaultTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {noindex && (
        <>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="googlebot" content="noindex, nofollow" />
        </>
      )}

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}

      {children}
    </>
  );
};

export default Seo;
