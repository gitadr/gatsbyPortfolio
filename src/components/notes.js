import React from "react";
import styles from "./notes.module.css";
import { Link } from "gatsby";

export default () => (
  <section className={styles.notes}>
    <div class="container">
      <div className={styles.articleHero}>
        <article className={styles.hero}>
          <p className="articleDate">Monday, 8 October 2018</p>
          <Link to="/blogArticle_one">
            <h1>"It's better to be a pirate than join the navy."</h1>
          </Link>
          <div className={styles.articlePreview}>
            <img src={require("../images/heroImage.png")} alt="Steve Jobs" />
            <div>
              <p>
                In January 1983 Steve Jobs began a company retreat with three
                "Sayings from Chairman Jobs", intended to inspire the team and
                set the tone for the meeting...
              </p>
            </div>
          </div>
        </article>
      </div>
      <div className={styles.articleList}>
        <article className={styles.list}>
          <p className="articleDate">Monday, 8 October 2018</p>
          <Link to="/blogArticle_two">
            <h2>Designing with constraints</h2>
          </Link>
        </article>
        <article className={styles.list}>
          <p className="articleDate">Monday, 8 October 2018</p>
          <Link to="/blogArticle_three">
            <h2>Framer prototyping and my experience learning React</h2>
          </Link>
        </article>
        <article className={styles.list}>
          <p className="articleDate">Monday, 8 October 2018</p>
          <Link to="/blogArticle_four">
            <h2>Digital psychology – Rational designs for irrational humans</h2>
          </Link>
        </article>
      </div>
    </div>
  </section>
);
