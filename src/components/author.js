import React from "react";
import styles from "./author.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Author = () => {
  return (
    <div className={styles.authorFooter}>
      <div className={styles.avatar}>
        <StaticImage src="../images/avatar.jpg" alt="AaronRoot" />
      </div>
      <div className={styles.bio}>
        <p className="intro">
          Hi, I'm Aaron. Director of Design at{" "}
          <a href="http://www.nearmap.com" target="_blank" rel="noreferrer">
            Nearmap
          </a>
          . I help teams create thoughtful, intuitive and empowering products.
        </p>
        <a href="mailto:mail@aaronroot.net" className="button">
          <span className="linkIcon" />
          <span className="text">Get In Touch</span>
        </a>
        <a href="https://www.threads.net/@aarootco" className="button">
          <span className="threadsIcon" />
          <span className="text">Follow</span>
        </a>
      </div>
    </div>
  );
};

export default Author;
