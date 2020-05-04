import React from "react";
import styles from "./projectThree.module.css";

export default () => (
  <section className={styles.work}>
    <div className={styles.container}>
      <div className={styles.workText}>
        <h1>Designing aerial maps, from the ground up.</h1>
        <p>
          Seeing the world from a different angle can give you a completely
          different prospective. At Nearmap, we are creating geospatial tools
          that aim to profoundly change the way people work.
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
