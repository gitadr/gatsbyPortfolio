import React from "react";
import styles from "./articleTemplate.module.css";
import Author from "../components/author";
import Header from "../components/internalHeader";
import Footer from "../components/footer";
import SEO from "../components/SEO";
import { graphql } from "gatsby";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className={styles.noteArticle}>
      <div className={styles.container}>
        <SEO />
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
