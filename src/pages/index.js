import React from "react";
import { Link, graphql } from "gatsby";
import styles from "./index.module.css";
import Header from "../components/header";
import Project1 from "../components/projectOne";
import Project2 from "../components/projectTwo";
import Project3 from "../components/projectThree";
import Footer from "../components/footer";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

export const Head = () => (
  <Seo
    title="Aaron Root – Portfolio"
    description="Product design leadership, case studies, and journal entries from Aaron Root."
    pathname="/"
  />
);

class JournalIndex extends React.Component {
  render() {
    const { data } = this.props;
    const heroArticle = data.heroArticle?.edges?.[0]?.node;
    const notes = data.recentNotes?.edges || [];
    const heroImage = heroArticle?.frontmatter?.heroImage
      ? getImage(heroArticle.frontmatter.heroImage)
      : null;
    const heroImageAlt =
      heroArticle?.frontmatter?.heroImageAlt || heroArticle?.frontmatter?.title;

    return (
      <div>
        <Header />
        <Project3 />
        <Project2 />
        <Project1 />

        <section className={styles.blogArticles}>
          <div className="container">
            <div className={styles.articleHero}>
              {heroArticle && (
                <article className={styles.hero}>
                  {heroArticle.frontmatter?.date && (
                    <p className="date">{heroArticle.frontmatter.date}</p>
                  )}
                  <h1>
                    {heroArticle.fields?.slug ? (
                      <Link style={{ boxShadow: `none` }} to={heroArticle.fields.slug}>
                        {heroArticle.frontmatter?.title || heroArticle.fields.slug}
                      </Link>
                    ) : (
                      heroArticle.frontmatter?.title || heroArticle.fields?.slug
                    )}
                  </h1>
                  <div className={styles.articlePreview}>
                    {heroImage ? (
                      <GatsbyImage
                        className={styles.journalImage}
                        image={heroImage}
                        alt={heroImageAlt || "Article illustration"}
                        style={{ width: "100%", aspectRatio: "1 / 1" }}
                        imgStyle={{ objectFit: "cover" }}
                      />
                    ) : (
                      <StaticImage
                        className={styles.journalImage}
                        src="../images/home/heroImage.png"
                        alt="Journal cover"
                        width={210}
                        height={210}
                        style={{ width: "100%", aspectRatio: "1 / 1" }}
                        imgStyle={{ objectFit: "cover" }}
                      />
                    )}
                    <div>
                      {heroArticle.excerpt && <p>{heroArticle.excerpt}</p>}
                    </div>
                  </div>
                </article>
              )}
            </div>
            <div className={styles.articleList}>
              <ul>
                {notes.map(({ node }) => {
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
    heroArticle: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/articles/" } }
      sort: { frontmatter: { date: DESC } }
      limit: 1
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            heroImageAlt
            heroImage {
              childImageSharp {
                gatsbyImageData(
                  width: 210
                  height: 210
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  transformOptions: { fit: COVER, cropFocus: ATTENTION }
                )
              }
            }
          }
        }
      }
    }
    recentNotes: allMarkdownRemark(
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
