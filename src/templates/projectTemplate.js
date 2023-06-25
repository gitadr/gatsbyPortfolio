import React from "react";
import styles from "./projectsTemplate.module.css";
import Author from "../components/author";
import Navigation from "../components/navbar";
import Footer from "../components/footer";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className={styles.projectsArticle}>
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