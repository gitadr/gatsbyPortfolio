import React from "react";
import styles from "./work.module.css";
import { Link } from "gatsby";

export default () => (
  <section className={styles.work}>
    <div className={styles.container}>
      <div className={styles.workText}>
        <p className="articleDate">RECENT PROJECTS</p>
        <h1>Designing high risk interactions.</h1>
        <p>
          Trading is hard. Designing trading applications isn't any easier.
          Executing an order at the right second can make the difference between
          a profit or a loss. As a result, quantifying the opportunity cost of
          interactions becomes vital.
        </p>
        <Link to="/caseStudy_one" className="button invert">
          <span className="linkIcon" />
          <span className="text">View Project</span>
        </Link>
      </div>
    </div>
  </section>
);
