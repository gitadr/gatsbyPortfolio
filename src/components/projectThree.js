import React from "react";
import styles from "./projectThree.module.css";

export default () => (
  <section className={styles.work}>
    <div className={styles.container}>
      <div className={styles.workText}>
        <div className="companyName">
          <p className={styles.company}>PROJECT 03</p>
        </div>
        <h1>Designing aerial maps from the ground up.</h1>
        <p>
          Trading is hard. Designing a trading platform isn't any easier. As
          Lead designer, I spent over three years helping IG design and build a
          new generation of task orientated trading applications.
        </p>
        <ul>
          <li>
            <div className="button invert">
              <span className="linkIcon" />
              <span className="text">COMING SOON</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
