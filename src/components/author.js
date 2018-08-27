import React from "react";
import styles from "./author.module.css";

export default () => (
  <div className={styles.authorFooter}>
    <div className={styles.avatar}>
      <img src={require("../images/avatar.jpg")} alt="AaronRoot" />
    </div>
    <div className={styles.bio}>
      <p className="intro">
        Hi I’m Aaron, a Sydney based product designer. I specialise in clean and
        well structured interfaces, user centred design, data driven prototypes
        and design systems.
      </p>
      <a href="https://twitter.com/aaroot" className="button">
        <span className="twitterIcon" />
        <span className="text">Follow on Twitter</span>
      </a>
      <a href="mailto:mail@aaronroot.net" className="button">
        <span className="linkIcon" />
        <span className="text">Get In Touch</span>
      </a>
    </div>
  </div>
);
