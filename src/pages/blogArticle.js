import React from "react";
import { Link } from "gatsby";
import styles from "./blogArticle.module.css";
import Footer from "../components/footer";

export default () => (
  <div className={styles.blogArticle}>
    <div className={styles.container}>
      <div className={styles.blogArticleHeader}>
        <Link to="/" className={styles.blogArticleLink}>
          Back
        </Link>
      </div>
      <article>
        <section>
          <h1>Designing high risk interactions.</h1>
          <p className="intro">
            Trading is hard. Designing trading applications isn't any easier.
            Executing an order at the right second can make the difference
            between a profit or a loss. As a result, quantifying the opportunity
            cost of interactions becomes vital.
          </p>
        </section>
      </article>
    </div>
    <Footer />
  </div>
);
