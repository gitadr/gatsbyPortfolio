import React from "react";
import styles from "./footer.module.css";

export default () => (
  <footer>
    <div className={styles.container}>
      <div className={styles.footerTwitter}>
        <a href="https://twitter.com/aaroot">
          <img
            className="twitterLogo"
            src={require("../images/icons/twitterLogo.svg")}
            alt="Twitter logo"
          />
        </a>
        <div className={styles.tweet}>
          <p className="intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            non pretium massa. Integer pellentesque in magna ut laoreet. Aenean
            luctus tristique lacus in rutrum.
          </p>
        </div>
      </div>
      <div className={styles.footerInstagram}>
        <img
          className={styles.instagramLogo}
          src={require("../images/icons/instagramLogo.svg")}
          alt="instagram"
        />
        <ul>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/image1.png")}
              alt="image1"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/image2.png")}
              alt="image2"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/image3.png")}
              alt="image3"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/image4.png")}
              alt="image4"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/image5.png")}
              alt="image5"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/image1.png")}
              alt="image1"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/image2.png")}
              alt="image2"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/image3.png")}
              alt="image3"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/image4.png")}
              alt="image4"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/image5.png")}
              alt="image5"
            />
          </li>
        </ul>
      </div>
      <div className={styles.footerKeyline} />
      <div className={styles.footerColophon}>
        <p>
          This portfolio is a work-in-progress. Built using{" "}
          <a href="https://www.gatsbyjs.org/">Gatsby</a>, the{" "}
          <a href="https://reactjs.org/">React</a> static site generater. Coded
          using <a href="https://code.visualstudio.com/">VS Code</a>, paired
          with Framer's handsome{" "}
          <a href="https://framer.com/free-syntax-theme/">syntax theme</a>.
          Version control is handled by{" "}
          <a href="http://www.github.com/gitadr">GitHub</a> and deployment by{" "}
          <a href="https://www.netlify.com/">Netfliy</a>. Type is currently set
          in your system font because i've been too indecisive to choose
          another. If there is anything else you would like to know please email
          me at <a href="mailto:mail@aaronroot.net">mail@aaronroot.net</a>
        </p>
      </div>
      <div className={styles.footerCopyright}>
        <div>
          <p>
            Made with ♥ by Aaron Root <br /> © Copyright 2018
          </p>
        </div>
      </div>
    </div>
  </footer>
);
