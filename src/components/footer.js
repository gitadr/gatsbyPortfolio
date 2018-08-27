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
            Super impressed with the second @
            <a href="https://twitter.com/framer">Framer</a> X beta. The code
            component feature seems to have so much potential. Excited about the
            private store functionality and more examples to learn from.
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
              src={require("../images/instagram_01.jpg")}
              alt="image1"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/instagram_02.jpg")}
              alt="image2"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/instagram_03.jpg")}
              alt="image3"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/instagram_04.jpg")}
              alt="image4"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/instagram_05.jpg")}
              alt="image5"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/instagram_06.jpg")}
              alt="image1"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/instagram_07.jpg")}
              alt="image2"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/instagram_08.jpg")}
              alt="image3"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/instagram_09.jpg")}
              alt="image4"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/instagram_10.jpg")}
              alt="image5"
            />
          </li>
        </ul>
      </div>
      <div className={styles.footerKeyline} />
      <div className={styles.footerColophon}>
        <p className="caption">
          This portfolio is a work-in-progress. Built with{" "}
          <a href="https://reactjs.org/">React</a> and{" "}
          <a href="https://www.gatsbyjs.org/">Gatsby</a>, written using{" "}
          <a href="https://code.visualstudio.com/">VS Code</a> and Framer's
          handsome{" "}
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
          <p className="caption">
            Made with ♥ by Aaron Root <span>© Copyright 2018</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
);
