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
        <h1>Deliverying for the experiences.</h1>
        <p>
          During a six month contact at Woolies X, I helped design and deliver
          the Lorem ipsum dolor sit amet consectetur adipiscing elit
          suspendisse.
        </p>
        <ul>
          <li>
            <Link to="/case_study_forex_trading" className="button">
              <span className="linkIcon" />
              <span className="text">The last mile </span>
            </Link>
          </li>
          <li>
            <Link to="/case_study_mobile_vision" className="button">
              <span className="linkIcon" />
              <span className="text">Connected customers</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
);