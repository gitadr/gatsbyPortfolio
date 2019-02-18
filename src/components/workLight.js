import React from "react";
import styles from "./workLight.module.css";
import { Link } from "gatsby";

export default () => (
  <section className={styles.work}>
    <div className={styles.container}>
      <div className={styles.workText}>
        <div className="companyName">
          <span className={styles.appIcon} />
          <p className={styles.company}>WOOLWORTHS – GROCERIES</p>
        </div>
        <h1>Delivering value for lorem pick up ipsum diet.</h1>
        <ul>
          <li>
            <Link to="/case_study_forex_trading" className="button">
              <span className="linkIcon" />
              <span className="text">Find Out More</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
