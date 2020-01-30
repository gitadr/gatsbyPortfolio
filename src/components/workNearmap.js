import React from "react";
import styles from "./workDark.module.css";
import { Link } from "gatsby";

export default () => (
  <section className={styles.work}>
    <div className={styles.container}>
      <div className={styles.workText}>
        <div className="companyName">
          <span className={styles.appIcon} />
          <p className={styles.company}>Nearmap – Location Intelligence</p>
        </div>
        <h1>Designing multi dimensional interfaces.</h1>
        <p>
          Trading is hard. Designing a trading platform isn't any easier. As
          Lead designer, I spent over three years helping IG design and build a
          new generation of task orientated trading applications.
        </p>
        <ul>
          <li>
            <Link to="#" className="button invert">
              <span className="linkIcon" />
              <span className="text">COMING SOON</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
