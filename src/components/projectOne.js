import React from "react";
import styles from "./projectOne.module.css";
import { Link } from "gatsby";

export default () => (
  <section className={styles.work}>
    <div className={styles.container}>
      <div className={styles.workText}>
        <h1>
          Designing for <span className="white-space: nowrap;">high-risk</span>{" "}
          trading environments.
        </h1>
        <p>
          Trading is hard. Designing a trading platform isn't any easier. As
          Lead designer, I spent over three years helping IG design and build a
          new generation of task orientated trading applications.
        </p>
        <ul>
          <li>
            <Link to="/case_study_forex_trading" className="button invert">
              <span className="linkIcon" />
              <span className="text">TRADING NEW MARKETS</span>
            </Link>
          </li>
          <li>
            <Link to="/case_study_mobile_vision" className="button invert">
              <span className="linkIcon" />
              <span className="text">A Mobile Vision</span>
            </Link>
          </li>
          <li>
            <Link to="/case_study_design_system" className="button invert">
              <span className="linkIcon" />
              <span className="text">Systems that scale</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
