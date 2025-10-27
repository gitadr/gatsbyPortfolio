import React from "react";
import { Link, graphql } from "gatsby";
import Navigation from "../../components/navbar";
import Footer from "../../components/footer";
import Seo from "../../components/seo";
import styles from "../journal.module.css";

const QuoteIndex = ({ data }) => {
  const quotes = data.quotes.edges;

  return (
    <div>
      <section className={styles.journal}>
        <div className={styles.container}>
          <Navigation />
          <section>
            <p className="caps">QUOTES</p>
            {quotes.length === 0 ? (
              <p>No quotes yet — check back soon.</p>
            ) : (
              quotes.map(({ node }) => {
                const { quote, title, date } = node.frontmatter;
                const displayTitle = title || quote;
                const formattedDate = date || "";
                return (
                  <div key={node.id} className={styles.notePost}>
                    <p className={styles.date}>{formattedDate}</p>
                    <h2>
                      <Link
                        style={{ boxShadow: `none` }}
                        to={`/journal/quotes${node.fields.slug}`}
                      >
                        {displayTitle}
                      </Link>
                    </h2>
                  </div>
                );
              })
            )}
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default QuoteIndex;

export const Head = () => (
  <Seo
    title="Quotes – Aaron Root"
    description="Hand-picked quotes and insights that inspire Aaron Root's practice."
    pathname="/journal/quotes"
  />
);

export const pageQuery = graphql`
  query QuotesIndexQuery {
    quotes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/quotes/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            quote
            title
            author
            source
            date(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  }
`;
