import React from "react";
import { graphql } from "gatsby";
import Navigation from "../components/navbar";
import Footer from "../components/footer";
import Seo from "../components/seo";
import styles from "./quoteTemplate.module.css";

const QuoteTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const { frontmatter, html } = post;
  const displayQuote = frontmatter.quote || frontmatter.title;

  return (
    <div className={styles.quotePage}>
      <div className={styles.container}>
        <Navigation />
        <article className={styles.article}>
          <h1 className={styles.displayQuote}>{displayQuote}</h1>
          <div className={styles.meta}>
            {frontmatter.author && <span>{frontmatter.author}</span>}
            {frontmatter.source &&
              (frontmatter.sourceUrl ? (
                <a
                  href={frontmatter.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {frontmatter.source}
                </a>
              ) : (
                <span>{frontmatter.source}</span>
              ))}
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default QuoteTemplate;

export const Head = ({ data }) => {
  const post = data.markdownRemark;
  const { site } = data;
  const displayQuote = post.frontmatter.quote || post.frontmatter.title;
  const description =
    post.excerpt || displayQuote || site.siteMetadata.description;
  const url = `${site.siteMetadata.siteUrl}/journal/quotes${post.fields.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: displayQuote,
    description,
    datePublished: post.frontmatter.date,
    author: {
      "@type": "Person",
      name: post.frontmatter.author || site.siteMetadata.title,
    },
    url,
  };

  return (
    <Seo
      title={`${displayQuote} – Quotes`}
      description={description}
      pathname={`/journal/quotes${post.fields.slug}`}
      type="article"
      jsonLd={jsonLd}
    />
  );
};

export const query = graphql`
  query QuoteTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        image
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        quote
        author
        source
        sourceUrl
        date(formatString: "DD MMMM YYYY")
      }
    }
  }
`;
