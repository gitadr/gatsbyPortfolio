import React from "react";
import styles from "./projectTwo.module.css";
import { Link } from "gatsby";

const ProjectTwo = () => {
  return (
    <section className={styles.work}>
      <div className={styles.container}>
        <div className={styles.workText}>
          <h1>Designing an augmented retail experience.</h1>
          <p>
            Technology is most powerful when it helps everyone. That's why as
            part of the mobile team, I helped deliver a more personal,
            convenient and accessible shopping experience for millions of
            Australians.
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
};
export default ProjectTwo;
