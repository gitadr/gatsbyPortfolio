import React from "react";
import styles from "./articles.module.css";

export default () => (
  <section className={styles.blogArticles}>
    <div className="container">
      <div className={styles.articleHero}>
        <article className={styles.hero}>
          <p className="articleDate">26 JANUARY 2019</p>
          <a
            href="https://www.aaronroot.net/note_190219_SteveJobs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>Building insanely great products.</h1>
          </a>
          <div className={styles.articlePreview}>
            <img
              src={require("../images/home/heroImage.png")}
              alt="Steve Jobs"
            />
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
          <p className="articleDate">COMING SOON</p>
          <h2>Designing with constraints.</h2>
        </article>
        <article className={styles.list}>
          <p className="articleDate">COMING SOON</p>
          <h2>Framer prototyping and my experience learning React.</h2>
        </article>
        <article className={styles.list}>
          <p className="articleDate">COMING SOON</p>
          <h2>Digital psychology – Rational designs for irrational humans.</h2>
        </article>
      </div>
    </div>
  </section>
);
