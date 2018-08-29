import React from "react";
import styles from "./header.module.css";

export default () => (
  <header>
    <div className={styles.container}>
      <div className={styles.headerIntro}>
        <h1>
          Hello, I’m Aaron.
          <span> A Sydney Based Product Designer.</span>
        </h1>
        <a href="mailto:mail@aaronroot.net" className="button top">
          <span className="linkIcon" />
          <span className="text">Get In Touch</span>
        </a>
        <a href="http://aaronroot.net/cv.pdf" className="button top">
          <span className="downloadIcon" />
          <span className="text">Download C.V.</span>
        </a>
        <div className={styles.block} />
      </div>
      <div className={styles.headerBody}>
        <p>
          Over the past seven years I have focused on designing products that
          help people understand and react to complex information. Whether
          that's patient health records or financial trading data, the goal is
          to create applications that are simple, innovative and empowering.
        </p>
        <p>
          I specialise in building clean and  well structured interfaces, data
          driven prototypes and scalable design systems. My experience leading
          co-located design teams has taught me the value of creating a clear
          design vision and developing robust team processes.
        </p>
        <a href="mailto:mail@aaronroot.net" className="button bottom">
          <span className="linkIcon" />
          <span className="text">Get In Touch</span>
        </a>
        <a href="http://aaronroot.net/cv.pdf" className="button bottom">
          <span className="downloadIcon" />
          <span className="text">Download C.V.</span>
        </a>
      </div>
    </div>
  </header>
);
