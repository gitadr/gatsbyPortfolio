import React from "react";
import { Link } from "gatsby";
import styles from "./internalHeader.module.css";

export default () => (
  <div className={styles.internalHeader}>
    <Link to="/notes" className={styles.backLink}>
      Back
    </Link>
  </div>
);
