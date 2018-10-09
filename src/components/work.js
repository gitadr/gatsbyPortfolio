import React from "react";
import styles from "./work.module.css";
import { Link } from "gatsby";

export default () => (
  <section className={styles.work}>
    <div className={styles.container}>
      <div className={styles.workText}>
        <h1>Designing high risk interactions.</h1>
        <p>
          Trading is hard. Designing a trading platforms isn't any easier. Over
          the last three years i've helped IG design and build a new generation
          of super fast, market centric trading apps. Find out more about my
          design process in the case studies below.
        </p>
        <ul>
          <li>
            <Link to="/case_study_forex_trading" className="button invert">
              <span className="linkIcon" />
              <span className="text">Trading New Markets</span>
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
              <span className="text">Systems That Scale</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
