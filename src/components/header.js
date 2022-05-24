import React from "react";
import styles from "./header.module.css";

const Header = () => { 
  return(
  <header>
    <div class="container">
      <div className={styles.headerIntro}>
        <h1>
          Hello, I’m Aaron.
          <span> A Sydney-based Product Designer.</span>
        </h1>
        <a href="mailto:mail@aaronroot.net" className="button top">
          <span className="linkIcon" />
          <span className="text">Get In Touch</span>
        </a>
        <a href={require("../files/aaronroot_cv.pdf")} className="button top">
          <span className="downloadIcon" />
          <span className="text">Download C.V.</span>
        </a>
        <div className={styles.block} />
      </div>
      <div className={styles.headerBody}>
        <p>
        Over the past ten years I have focused on designing things that help people understand and act upon complex information. Whether that's geospatial projections or trading data, the goal has been to create products that are simple, innovative and empowering.
        </p>
        <p>
        This experience has taught me a lot about what it takes to build great teams and products. Especially the importance of creating consensus, empathy and a clear design vision. But, most of all, the value in scaling and compounding positive change.
        </p>
        <a href="mailto:mail@aaronroot.net" className="button bottom">
          <span className="linkIcon" />
          <span className="text">Get In Touch</span>
        </a>
        <a
          href={require("../files/aaronroot_cv.pdf")}
          className="button bottom"
        >
          <span className="downloadIcon" />
          <span className="text">Download C.V.</span>
        </a>
      </div>
    </div>
  </header>
  );
};
export default Header;