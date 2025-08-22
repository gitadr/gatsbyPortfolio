import React from "react";
import Navigation from "../components/navbar";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div>
      <section className={styles.header}>
        <div className={styles.container}>
          <Navigation />
          <div className={styles.headerLorem}>
            <h1>Hello, world!</h1>
            <p className={styles.intro}>
              I'm Aaron Root, VP of Design at{" "}
              <a href="http://www.nearmap.com" target="_blank" rel="noreferrer">
                Nearmap
              </a>
              . I help teams create thoughtful and empowering products.
            </p>
            <a href="mailto:mail@aaronroot.net" className="button top">
              <span className="linkIcon" />
              <span className="text">Get in Contact</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aaroot"
              target="_blank"
              rel="noreferrer"
              className="button top"
            >
              <span className="linkIcon" />
              <span className="text">Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Header;
