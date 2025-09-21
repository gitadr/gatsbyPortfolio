import React from "react";
import Navigation from "./navbar";
import Footer from "./footer";
import Author from "./author";
import styles from "../styles/caseStudy.module.css";

const CaseStudyLayout = ({ children }) => {
  return (
    <div className={styles.caseStudy}>
      <div className={styles.container}>
        <header className={styles.caseStudyHeader}>
          <Navigation />
        </header>
        <main>
          <article>
            {children}
            <Author />
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudyLayout;
