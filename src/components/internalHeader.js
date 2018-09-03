import React from "react";
import { Link } from "gatsby";
import styles from "./internalHeader.module.css";

export default () => (
  <div className={styles.internalHeader}>
    <Link to="/" className={styles.backLink}>
      Back
    </Link>
  </div>
);
