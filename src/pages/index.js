import React from "react";
import { Link, graphql } from "gatsby";
import styles from "./journal.module.css";
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
        <section className={styles.blogArticles}>
          <div class="container">
            <div className={styles.articleHero}>
              <article className={styles.hero}>
                <p class="caps">ARTICLE – 26 JANUARY 2020</p>
                <a
                  href="https://medium.com/@aaroot/building-insanely-great-products-29e535b73a4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1>On Building Insanely Great Products.</h1>
                </a>
                <div className={styles.articlePreview}>
                  <img
                    src={require("../images/home/heroImage.png")}
                    alt="Steve Jobs"
                  />
                  <div>
                    <p>
                      In January 1983 Steve Jobs began a company retreat with
                      three "Sayings from Chairman Jobs", intended to inspire
                      the team and set the tone for the meeting...
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className={styles.articleList}>
              <ul>
                {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug;
                  return (
                    <li key={node.fields.slug}>
                      <article className={styles.list}>
                        <p class="caps">NOTE – {node.frontmatter.date}</p>
                        <h2>
                          <Link
                            style={{ boxShadow: `none` }}
                            to={node.fields.slug}
                          >
                            {title}
                          </Link>
                        </h2>
                      </article>
                    </li>
                  );
                })}
              </ul>
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
      limit: 3
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
