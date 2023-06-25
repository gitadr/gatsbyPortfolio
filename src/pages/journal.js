import React from "react";
import { Link, graphql } from "gatsby";
import styles from "./journal.module.css";
import Navigation from "../components/navbar";
import Footer from "../components/footer";

class JournalIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    const notesPosts = posts
      .filter(({ node }) => node.fileAbsolutePath.includes("/notes/"))
      .slice(0, 100); // Limit notesPosts to 100 posts
    const articlesPosts = posts
      .filter(({ node }) => node.fileAbsolutePath.includes("/articles/"))
      .slice(0, 100); // Limit articlesPosts to 100 posts

    return (
      <div>
        <section className={styles.journal}>
          <div className={styles.container}>
            <Navigation />

            {/* 
            <section>
              <h3>ARTICLES</h3>
              <div
                className={`${styles.articleContainer} ${styles.articleColumns}`}
              >
                {articlesPosts[0] && (
                  <div key={articlesPosts[0].node.fields.slug}>
                    <p>{articlesPosts[0].node.frontmatter.date}</p>
                    <h2>
                      <Link
                        style={{ boxShadow: `none` }}
                        to={articlesPosts[0].node.fields.slug}
                      >
                        {articlesPosts[0].node.frontmatter.title}
                      </Link>
                    </h2>
                  </div>
                )}å
                {articlesPosts[1] && (
                  <div key={articlesPosts[1].node.fields.slug}>
                    <p>{articlesPosts[1].node.frontmatter.date}</p>
                    <h2>
                      <Link
                        style={{ boxShadow: `none` }}
                        to={articlesPosts[1].node.fields.slug}
                      >
                        {articlesPosts[1].node.frontmatter.title}
                      </Link>
                    </h2>
                  </div>
                )}
              </div>
            </section>
            */}

            <section>
              <p class="caps">ARTICLES</p>
              {articlesPosts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                return (
                  <div key={node.fields.slug} className={styles.notePost}>
                    <h1>
                      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                      </Link>
                    </h1>
                    <p className={styles.date}>{node.frontmatter.date}</p>
                  </div>
                );
              })}
            </section>
            <section>
              <p class="caps">NOTES</p>
              {notesPosts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                return (
                  <div key={node.fields.slug} className={styles.notePost}>
                    <h2>
                      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                      </Link>
                    </h2>
                    <p className={styles.date}>{node.frontmatter.date}</p>
                  </div>
                );
              })}
            </section>
            <section>
              <p class="caps">CLIPPINGS</p>
              <div className={styles.imageContainer}>
                {data.images.edges.map(({ node }) => (
                  <img
                    key={node.id}
                    src={node.publicURL}
                    alt=""
                    className={styles.scrapsImage}
                  />
                ))}
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

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          fileAbsolutePath
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
          }
        }
      }
    }
    images: allFile(
      filter: {
        ext: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "scraps" }
        sourceInstanceName: { eq: "images" }
      }
      sort: { fields: [birthTime], order: DESC }
      limit: 120
    ) {
      edges {
        node {
          id
          relativePath
          publicURL
        }
      }
    }
  }
`;
