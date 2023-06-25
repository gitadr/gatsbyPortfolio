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
              I'm Aaron. I design products that help people navigate complexity.
              Whether that's trading data, geospatial insights or your weekly
              grocery shopping, my goal is to create experiences that are
              simple, intuitive and empowering.
            </p>
            <p></p>
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
            <a href="mailto:mail@aaronroot.net" className="button top">
              <span className="linkIcon" />
              <span className="text">Get In Touch</span>
            </a>
            <a
              href={require("../files/aaronroot_cv.pdf")}
              className="button top"
            >
              <span className="downloadIcon" />
              <span className="text">Download C.V.</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Header;
