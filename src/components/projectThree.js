import React from "react";
import styles from "./projectThree.module.css";

const ProjectThree = () => {
  return (
    <section className={styles.work}>
      <div className={styles.container}>
        <div className={styles.workText}>
          <h1>Designing aerial insights, from the ground up.</h1>
          <p>
            Seeing the world from a new angle can provide a completely different
            perspective. At Nearmap, we are creating geospatial tools that aim
            to profoundly change the way people work.
          </p>
          <ul>
            <li>
              <div className="button invert">
                <span className="linkIcon" />
                <span className="text">COMING SOON</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default ProjectThree;
