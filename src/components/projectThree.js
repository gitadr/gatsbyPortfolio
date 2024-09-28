import React from "react";
import styles from "./projectThree.module.css";

const ProjectThree = () => {
  return (
    <section className={styles.work}>
      <div className={styles.container}>
        <div className={styles.workText}>
          <h1>Designing aerial insights, from the ground up.</h1>
          <p>
            Viewing the world from a new perspective can unlock entirely
            different insights. At Nearmap, we leverage aerial imagery and
            geospatial data to create empowering tools and workflows.
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
