import React from "react";
import styles from "./notes.module.css";
import { Link } from "gatsby";

export default () => (
  <section className={styles.notes}>
    <div className={styles.container}>
      <div className={styles.articleHero}>
        <article className={styles.hero}>
          <p className="articleDate">Tuesday, 17 July 2018</p>
          <Link to="/blog">
            <h1>I’d rather be a pirate than join the navy.</h1>
          </Link>
          <div className={styles.articlePreview}>
            <img src={require("../images/heroImage.png")} alt="Steve Jobs" />
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adi piscing elit. Nullam
                posuere nisl et sem congue, ac tempus nibh egestas nullam
                tincidunt nib Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc volutpat nec dolor ut luctus. Ut id felis sed nisl
                aliquet egestas...
              </p>
            </div>
          </div>
        </article>
      </div>
      <div className={styles.articleList}>
        <article className={styles.list}>
          <p className="articleDate">Tuesday, 17 July 2018</p>
          <Link to="/blog">
            <h2>Lorem ipsum dolor sit amet consectetur?</h2>
          </Link>
        </article>
        <article className={styles.list}>
          <p className="articleDate">Tuesday, 17 July 2018</p>
          <Link to="/blog">
            <h2>Fusce eget massa quis neque euismod venenatis</h2>
          </Link>
        </article>
        <article className={styles.list}>
          <p className="articleDate">Tuesday, 17 July 2018</p>
          <Link to="/blog">
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              tellus leo tempus at suscipit ut
            </h2>
          </Link>
        </article>
      </div>
    </div>
  </section>
);
