import React from "react";
import styles from "./notesTemplate.module.css";
import Author from "../components/author";
import Header from "../components/internalHeader";
import Footer from "../components/footer";
import SEO from "../components/SEO";
import { graphql } from "gatsby";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className={styles.noteArticle}>
      <div className={styles.container}>
        <SEO />
        <Header />
        <article>
          <section>
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </section>
          <Author />
        </article>
      </div>
      <Footer />
    </div>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
