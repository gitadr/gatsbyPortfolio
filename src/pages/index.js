import React from "react";
import { Link, graphql } from "gatsby";
import styles from "./index.module.css";
import Header from "../components/header";
import Project1 from "../components/projectOne";
import Project2 from "../components/projectTwo";
import Project3 from "../components/projectThree";
import Footer from "../components/footer";
import { StaticImage } from "gatsby-plugin-image";

export const Head = () => (
  <>
    <title>Aaron Root – Portfolio</title>
  </>
);

class JournalIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <div>
        <Header />
        <Project3 />
        <Project2 />
        <Project1 />

        <section className={styles.blogArticles}>
          <div className="container">
            <div className={styles.articleHero}>
              <article className={styles.hero}>
                <p className="date">26 January 2020</p>
                <h1>
                  <a
                    href="https://www.aaronroot.net/article_190219_SteveJobs/"
                    rel="noopener noreferrer"
                  >
                    On Building Insanely Great Products.
                  </a>
                </h1>
                <div className={styles.articlePreview}>
                  <StaticImage
                    className={styles.journalImage}
                    src="../images/home/heroImage.png"
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
                        <p className="date">{node.frontmatter.date}</p>
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
      sort: { frontmatter: { date: DESC } }
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
