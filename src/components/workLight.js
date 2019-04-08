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
        <h1>Designing for geo-located environments.</h1>
        <p>
          Technology is most powerful when it empowers everyone. That's why as
          part of the mobile team, I helped deliver a more personal, convenient
          and accessible shopping experience for millions of Australians.
        </p>
        <ul>
          <li>
            <Link to="/case_study_augmented_shopping" className="button">
              <span className="linkIcon" />
              <span className="text">Augmented shopping</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
