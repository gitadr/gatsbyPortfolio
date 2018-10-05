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
          Placing an order at the right second can make the difference between a
          profit or a loss. As a result, knowing the opportunity cost of an
          interaction becomes vital.
        </p>
        <ul>
          <li>
            <Link to="/case_study_web_trading" className="button invert">
              <span className="linkIcon" />
              <span className="text">Evolving Web Trading</span>
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
          <li>
            <Link to="/case_study_forex_trading" className="button invert">
              <span className="linkIcon" />
              <span className="text">Trading New Markets</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
