import React from "react";
import { Link, graphql } from "gatsby";
import styles from "./projects.module.css";
import Navigation from "../components/navbar";
import Footer from "../components/footer";

class ProjectIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <div>
        <section className={styles.projects}>
          <div className={styles.container}>
            <Navigation />
            <div className="sectionHeader">
              <h1>Projects</h1>
            </div>

            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <div key={node.fields.slug}>
                  <p className="caps">{node.frontmatter.date}</p>
                  <h2>
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h2>
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

export default ProjectIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { frontmatter: { date: DESC } }
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
  }
`;
