import React from "react";
import { Link, graphql } from "gatsby";
import Header from "../components/header";
import Project1 from "../components/projectOne";
import Project2 from "../components/projectTwo";
import Project3 from "../components/projectThree";
import Footer from "../components/footer";
import SEO from "../components/SEO";

class JournalIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <div>
        <SEO />
        <Header />
        <Project1 />
        <Project2 />
        <Project3 />
        <section class="journal">
          <div class="container">
            <div class="journalText">
              <p class="caps">Notes + Scribbles</p>
              <ul>
                {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug;
                  return (
                    <li key={node.fields.slug}>
                      <h1>
                        <Link
                          style={{ boxShadow: `none` }}
                          to={node.fields.slug}
                        >
                          {title}
                        </Link>
                      </h1>
                    </li>
                  );
                })}
              </ul>

              <a href="/notes" className="button top">
                <span className="linkIcon" />
                <span className="text">View Journal</span>
              </a>
            </div>
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
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/notes/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
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
