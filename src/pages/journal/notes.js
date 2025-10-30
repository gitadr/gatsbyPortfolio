import React from "react";
import { Link, graphql } from "gatsby";
import styles from "../journal.module.css";
import Navigation from "../../components/navbar";
import Footer from "../../components/footer";
import Seo from "../../components/seo";

const NotesIndex = ({ data }) => {
  const notes = data.notes.edges;

  return (
    <div>
      <section className={styles.journal}>
        <div className={styles.container}>
          <Navigation />
          <section className={styles.section}>
            <p className="caps">NOTES</p>
            {notes.length === 0 ? (
              <p>No notes yet — check back soon.</p>
            ) : (
              notes.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                const formattedDate = node.frontmatter.date || "";
                return (
                  <div key={node.id} className={styles.notePost}>
                    <p className={styles.date}>{formattedDate}</p>
                    <h2>
                      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
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

export default NotesIndex;

export const Head = () => (
  <Seo
    title="Notes – Aaron Root"
    description="Quick reflections, observations, and learnings from Aaron Root."
    pathname="/journal/notes"
  />
);

export const pageQuery = graphql`
  query NotesIndexQuery {
    notes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/notes/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  }
`;
