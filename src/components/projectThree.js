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
              <a
                href="https://www.nearmap.com/"
                className="button invert"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="linkIcon" />
                <span className="text">CURIOSITY MEETS CLARITY</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default ProjectThree;
