import React from "react";
import Navigation from "../components/navbar";
import styles from "./articleTemplate.module.css";
import Author from "../components/author";
import Footer from "../components/footer";
import { graphql } from "gatsby";

const NoteTemplate = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className={styles.noteArticle}>
      <div className={styles.container}>
        <Navigation />
        <article>
          <section>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </section>
          <Author />
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default NoteTemplate;

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
