import React from "react";
import styles from "./footer.module.css";

export default () => (
  <footer>
    <div class="container">
      <div className={styles.footerTwitter}>
        <a
          href="https://twitter.com/aaroot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="twitterLogo"
            src={require("../images/icons/twitterLogo.svg")}
            alt="Twitter logo"
          />
        </a>
        <h2>@aaroot</h2>
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
        <img
          className={styles.instagramLogo}
          src={require("../images/icons/instagramLogo.svg")}
          alt="instagram"
        />
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
          This portfolio is a work-in-progress. Built with{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{" "}
          and{" "}
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
          , written using{" "}
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VS Code
          </a>{" "}
          and Framer's handsome{" "}
          <a
            href="https://framer.com/free-syntax-theme/"
            target="_blank"
            rel="noopener noreferrer"
          >
            syntax theme
          </a>
          . Version control is handled by{" "}
          <a
            href="http://www.github.com/gitadr"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and deployment by{" "}
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netfliy
          </a>
          . Type is set in{" "}
          <a
            href="https://www.ibm.com/plex/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Plex
          </a>
          , an open source typeface from{" "}
          <a
            href="https://github.com/IBM/plex"
            target="_blank"
            rel="noopener noreferrer"
          >
            IBM
          </a>{" "}
          . If there is anything else you would like to know please email me at{" "}
          <a href="mailto:mail@aaronroot.net">mail@aaronroot.net</a>
        </p>
      </div>
      <div className={styles.footerCopyright}>
        <div>
          <p className="caption">
            Made with ♥&#xFE0E; by Aaron Root <span>© Copyright 2020</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
);
