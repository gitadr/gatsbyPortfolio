import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Navigation from "../components/navbar";
import Footer from "../components/footer";
import Seo from "../components/seo";
import styles from "./clippingTemplate.module.css";

const formatTitle = name => {
  if (!name) {
    return "Untitled clipping";
  }
  const cleaned = name.replace(/[-_]+/g, " ");
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
};

const ClippingTemplate = ({ data }) => {
  const file = data.file;
  const image = getImage(file.childImageSharp);
  const title = formatTitle(file.name);

  return (
    <div className={styles.clippingPage}>
      <div className={styles.container}>
        <Navigation />
        <article className={styles.article}>
          <header className={styles.header}>
            <p className="caps">CLIPPING</p>
            <h1>{title}</h1>
            <div className={styles.meta}>
              {file.birthTime && <span>{file.birthTime}</span>}
              <span>{file.relativePath}</span>
            </div>
          </header>
          <section className={styles.body}>
            {image && (
              <GatsbyImage
                image={image}
                alt={title}
                className={styles.heroImage}
                objectFit="contain"
              />
            )}
          </section>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default ClippingTemplate;

export const Head = ({ data }) => {
  const file = data.file;
  const { site } = data;
  const title = formatTitle(file.name);
  const description = `Scrapbook clipping: ${title}`;
  const pathname = `/journal/clippings${file.fields.slug}`;
  const url = `${site.siteMetadata.siteUrl}${pathname}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: title,
    description,
    datePublished: file.birthTime,
    url,
  };

  return (
    <Seo
      title={`${title} – Clipping`}
      description={description}
      pathname={pathname}
      type="article"
      jsonLd={jsonLd}
    />
  );
};

export const query = graphql`
  query ClippingTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        image
        description
      }
    }
    file(fields: { slug: { eq: $slug } }) {
      id
      name
      relativePath
      birthTime(formatString: "DD MMMM YYYY")
      fields {
        slug
      }
      childImageSharp {
        gatsbyImageData(
          width: 1200
          height: 1200
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`;
