import React from "react";
import styles from "./articleTemplate.module.css";
import Author from "../components/author";
import Header from "../components/internalHeader";
import Footer from "../components/footer";
import SearchEngineOptimisation from "../components/searchEngineOptimisation";

export default ({ data }) => {
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