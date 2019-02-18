import React from "react";
import { Link, graphql } from "gatsby";

import styles from "./notes.module.css";
import Header from "../components/internalHeader";
import Footer from "../components/footer";
import SEO from "../components/SEO";

class NoteIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <div>
        <section className={styles.notes}>
          <div className={styles.container}>
            <SEO />
            <Header />
            <h1>Notes</h1>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <div key={node.fields.slug}>
                  <h3>
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </div>
              );
            })}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default NoteIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/notes/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
