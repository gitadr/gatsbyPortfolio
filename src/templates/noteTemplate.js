import React from "react";
import Navigation from "../components/navbar";
import styles from "./articleTemplate.module.css";
import Author from "../components/author";
import Footer from "../components/footer";
import { graphql } from "gatsby";
import Seo from "../components/seo";

const NoteTemplate = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className={styles.noteArticle}>
      <div className={styles.container}>
        <Navigation />
        <article>
          <section>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </section>
          <Author />
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default NoteTemplate;

export const Head = ({ data, location }) => {
  const post = data.markdownRemark;
  const { site } = data;
  const description =
    post.frontmatter?.description || post.excerpt || site.siteMetadata.description;
  const url = `${site.siteMetadata.siteUrl}${post.fields.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.frontmatter.title,
    description,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    url,
    author: {
      "@type": "Person",
      name: site.siteMetadata.title,
    },
    publisher: {
      "@type": "Organization",
      name: site.siteMetadata.title,
      logo: {
        "@type": "ImageObject",
        url: `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`,
      },
    },
  };

  return (
    <Seo
      title={`${post.frontmatter.title} – ${site.siteMetadata.title}`}
      description={description}
      pathname={post.fields.slug}
      type="article"
      jsonLd={articleSchema}
    >
      <meta property="article:published_time" content={post.frontmatter.date} />
    </Seo>
  );
};

export const query = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        image
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
