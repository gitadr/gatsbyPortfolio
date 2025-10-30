import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styles from "../journal.module.css";
import Navigation from "../../components/navbar";
import Footer from "../../components/footer";
import Seo from "../../components/seo";

const formatTitle = name => {
  if (!name) return "Untitled clipping";
  const cleaned = name.replace(/[-_]+/g, " ");
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
};

const ClippingsIndex = ({ data }) => {
  const clippings = data.clippings.edges;

  return (
    <div>
      <section className={styles.journal}>
        <div className={styles.container}>
          <Navigation />
          <section className={styles.section}>
            <p className="caps">CLIPPINGS</p>
            {clippings.length === 0 ? (
              <p>No clippings yet — check back soon.</p>
            ) : (
              <div className={styles.imageContainer}>
                {clippings.map(({ node }) => {
                  const image = getImage(node.childImageSharp);
                  if (!image) {
                    return null;
                  }
                  const title = formatTitle(node.name);
                  const clippingPath = `/journal/clippings${node.fields.slug}`;
                  return (
                    <Link key={node.id} to={clippingPath} style={{ boxShadow: `none` }}>
                      <GatsbyImage
                        image={image}
                        alt={title}
                        className={styles.clippingImage}
                        objectFit="cover"
                      />
                    </Link>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ClippingsIndex;

export const Head = () => (
  <Seo
    title="Clippings – Aaron Root"
    description="A scrapbook of textures, sketches, and other visual inspiration from Aaron Root."
    pathname="/journal/clippings"
  />
);

export const pageQuery = graphql`
  query ClippingsIndexQuery {
    clippings: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "clippings" }
        ext: { regex: "/(jpg)|(jpeg)|(png)/" }
      }
      sort: { birthTime: DESC }
    ) {
      edges {
        node {
          id
          name
          birthTime(formatString: "DD MMMM YYYY")
          fields {
            slug
          }
          childImageSharp {
            gatsbyImageData(
              width: 600
              height: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  }
`;
