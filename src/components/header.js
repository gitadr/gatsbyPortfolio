import React from "react";
import styles from "./header.module.css";

export default () => (
  <header>
    <div className={styles.container}>
      <div className={styles.headerIntro}>
        <h1>
          Hello I’m Aaron,
          <span> A Sydney based Product Designer.</span>
        </h1>
        <div className={styles.block} />
      </div>
      <div className={styles.headerBody}>
        <p>
          Over the past seven years I have focused on building products that
          help people understand and react to complex information. Whether
          that's patient health records or financial trading data, the goal has
          been to create applications that are simple, accessible and
          empowering.
        </p>
        <p>
          I specialise in clean and well structured interfaces, user centred
          design, data driven prototypes and design systems. My experience
          leading co-located design teams has taught me the value of creating a
          clear design vision and developing robust team processes.
        </p>
        <a href="mailto:mail@aaronroot.net" className="button">
          <span className="linkIcon" />
          <span className="text">Get In Touch</span>
        </a>
        <a href="http://aaronroot.net/cv.pdf" className="button">
          <span className="downloadIcon" />
          <span className="text">Download C.V.</span>
        </a>
      </div>
    </div>
  </header>
);
