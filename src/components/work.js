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
          Trading is hard. Designing a trading application isn't any easier.
          Placing an order at the right second can make the difference between a
          profit or a loss. As a result, knowing the opportunity cost of every
          interaction becomes vital.
        </p>
        <Link to="/caseStudy_one" className="button invert">
          <span className="linkIcon" />
          <span className="text">View Project</span>
        </Link>
      </div>
    </div>
  </section>
);
