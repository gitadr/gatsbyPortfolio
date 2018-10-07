import React from "react";
import styles from "./work.module.css";
import { Link } from "gatsby";

export default () => (
  <section className={styles.work}>
    <div className={styles.container}>
      <div className={styles.workText}>
        <h1>Designing high risk interactions.</h1>
        <p>
          Trading is hard. Designing a trading application isn't any easier.
          Over the last three years I have immersed myself in the world of
          leveraged trading, helping IG design and build their next generation
          of trading apps. Three of my favourite projects are detailed below.
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
