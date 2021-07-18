import React from "react";
import styles from "./author.module.css";

export default () => (
  <div className={styles.authorFooter}>
    <div className={styles.avatar}>
      <img src={require("../images/avatar.jpg")} alt="AaronRoot" />
    </div>
    <div className={styles.bio}>
      <p className="intro">
      Hi, I’m Aaron. A Sydney-based Product Designer. I specialise in building scalable, user-centred  design teams that create innovative and empowering products.
      </p>
      <a href="mailto:mail@aaronroot.net" className="button">
        <span className="linkIcon" />
        <span className="text">Get In Touch</span>
      </a>
      <a href="https://twitter.com/aaroot" className="button">
        <span className="twitterIcon" />
        <span className="text">Follow</span>
      </a>
    </div>
  </div>
);
