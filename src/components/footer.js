import React from "react";
import styles from "./footer.module.css";

export default () => (
  <footer>
    <div class="container">
      <div className={styles.footerTwitter}>
        <h2>
          <a
            href="https://twitter.com/aaroot"
            target="_blank"
            rel="noopener noreferrer"
          >
            @aaroot
          </a>
        </h2>

        <div className={styles.tweet}>
          <p className="intro">
            Super impressed with the latest @
            <a
              href="https://twitter.com/framer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Framer
            </a>{" "}
            X beta. The code component feature seems to have a lot of potential.
            Excited to try the private store functionality and have more
            examples to learn from.
          </p>
        </div>
      </div>
      <div className={styles.footerInstagram}>
        <ul>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/home/instagram_01.jpg")}
              alt="image1"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/home/instagram_02.jpg")}
              alt="image2"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/home/instagram_03.jpg")}
              alt="image3"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/home/instagram_04.jpg")}
              alt="image4"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/home/instagram_05.jpg")}
              alt="image5"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/home/instagram_06.jpg")}
              alt="image1"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/home/instagram_07.jpg")}
              alt="image2"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/home/instagram_08.jpg")}
              alt="image3"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/home/instagram_09.jpg")}
              alt="image4"
            />
          </li>
          <li>
            <img
              className={styles.footerImage}
              src={require("../images/home/instagram_10.jpg")}
              alt="image5"
            />
          </li>
        </ul>
      </div>
      <div className={styles.footerKeyline} />
      <div className={styles.footerColophon}>
        <p className="caption">
          Developed using{" "}
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{" "}
          and{" "}
          <a
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
          , written in{" "}
          <a
            href="https://code.visualstudio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            VS Code
          </a>
          . Version controlled by{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and deployed with{" "}
          <a
            href="https://www.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netfliy
          </a>
          . Typeset in{" "}
          <a
            href="https://rsms.me/inter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inter
          </a>
          , an open source typeface from{" "}
          <a
            href="https://twitter.com/rsms"
            target="_blank"
            rel="noopener noreferrer"
          >
            @rsms
          </a>
          .
        </p>
      </div>
      <div className={styles.footerCopyright}>
        <div>
          <p className="caption">
            Made with ♥&#xFE0E; by Aaron Root <span>© Copyright 2021</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
);
