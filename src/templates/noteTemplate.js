import React from "react";
import styles from "./articleTemplate.module.css";
import Header from "../components/noteHeader";
import Author from "../components/author";
import Footer from "../components/footer";
import SearchEngineOptimisation from "../components/searchEngineOptimisation";
import { graphql } from "gatsby";

const NoteTemplate = ({ data }) => {

  const post = data.markdownRemark;
  return (
    <div className={styles.noteArticle}>
      <div className={styles.container}>
        <SearchEngineOptimisation />
        <Header />
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
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
