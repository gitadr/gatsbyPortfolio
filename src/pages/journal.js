import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styles from "./journal.module.css";
import Navigation from "../components/navbar";
import Footer from "../components/footer";
import Seo from "../components/seo";

class JournalIndex extends React.Component {
  render() {
    const { data } = this.props;
    const articlesPosts = data.articles.edges;
    const notesPosts = data.notes.edges;
    const clippingImages = data.clippings.edges;

    return (
      <div>
        <section className={styles.journal}>
          <div className={styles.container}>
            <Navigation />
            <section className={styles.section}>
              <p className="caps">ARTICLES</p>
              {articlesPosts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                return (
                  <div key={node.fields.slug} className={styles.notePost}>
                    <p className={styles.date}>{node.frontmatter.date}</p>
                    <h1>
                      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                      </Link>
                    </h1>
                  </div>
                );
              })}
            </section>
            <section className={styles.section}>
              <p className="caps">NOTES</p>
              {notesPosts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                return (
                  <div key={node.fields.slug} className={styles.notePost}>
                    <p className={styles.date}>{node.frontmatter.date}</p>
                    <h2>
                      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                      </Link>
                    </h2>
                  </div>
                );
              })}
            </section>
            <section className={styles.section}>
              <p className="caps">CLIPPINGS</p>
              <div className={styles.imageContainer}>
                {clippingImages.map(({ node }) => {
                  const image = getImage(node.childImageSharp);
                  if (!image) {
                    return null;
                  }
                  return (
                    <GatsbyImage
                      key={node.id}
                      image={image}
                      alt={`Clipping ${node.relativePath}`}
                      className={styles.clippingImage}
                    />
                  );
                })}
              </div>
            </section>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default JournalIndex;

export const Head = () => (
  <Seo
    title="Journal – Aaron Root"
    description="Recent articles, notes, and creative clippings from Aaron Root."
    pathname="/journal"
  />
);

export const pageQuery = graphql`
  query {
    articles: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/articles/" } }
      sort: { frontmatter: { date: DESC } }
      limit: 100
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
          }
        }
      }
    }
    notes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/notes/" } }
      sort: { frontmatter: { date: DESC } }
      limit: 100
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
          }
        }
      }
    }
    clippings: allFile(
      filter: {
        ext: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "clippings" }
        sourceInstanceName: { eq: "images" }
      }
      sort: { birthTime: DESC }
      limit: 80
    ) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            gatsbyImageData(
              width: 240
              height: 240
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  }
`;
