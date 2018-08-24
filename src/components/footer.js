import React from "react";
import styles from "./footer.module.css";

export default () => (
  <footer>
    <div className={styles.container}>
      <div className={styles.footerTwitter}>
        <a href="#">
          <img
            className="twitterLogo"
            src={require("../images/icons/twitterLogo.svg")}
            alt="instagram"
          />
        </a>
        <div className={styles.tweet}>
          <h4>@aaroot</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            non pretium massa. Integer pellentesque in magna ut laoreet. Aenean
            luctus tristique lacus in rutrum.
          </p>
        </div>
      </div>
      <div className={styles.footerInstagram}>
        <ul>
          <li>
            <a href="#">
              <img
                className={styles.instagramLogo}
                src={require("../images/icons/instagramLogo.svg")}
                alt="instagram"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className={styles.footerImage}
                src={require("../images/image1.png")}
                alt="image1"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className={styles.footerImage}
                src={require("../images/image2.png")}
                alt="image2"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className={styles.footerImage}
                src={require("../images/image3.png")}
                alt="image3"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className={styles.footerImage}
                src={require("../images/image4.png")}
                alt="image4"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className={styles.footerImage}
                src={require("../images/image5.png")}
                alt="image5"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footerKeyline} />
      <div className={styles.footerColophon}>
        <p>
          This site is a work-in-progress. It's being built with{" "}
          <a href="https://reactjs.org/">React</a> using <a href="#">VS Code</a>{" "}
          and Framer's handsome <a href="#">syntax theme</a>. Version control is
          handled by <a href="#">GitHub</a> and deployment by{" "}
          <a href="#">Netfliy</a>. Type is currently set in your system font
          because i've been too indecisive to choose another. If there is
          anything else you would like to know please email me at{" "}
          <a href="mailto:mail@aaronroot.net">mail@aaronroot.net</a>
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
