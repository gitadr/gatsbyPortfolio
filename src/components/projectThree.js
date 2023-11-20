import React from "react";
import styles from "./projectThree.module.css";

const ProjectThree = () => {
  return (
    <section className={styles.work}>
      <div className={styles.container}>
        <div className={styles.workText}>
          <h1>Designing aerial insights, from the ground up.</h1>
          <p>
            Seeing the world from a different angle can provide a completely new
            perspective. At Nearmap, we are focused on using geospatial insights
            to deliver empowering tool and workflows.
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
