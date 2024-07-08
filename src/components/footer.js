import React from "react";
import styles from "./footer.module.css";
import Weather from "./weather";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div className={styles.footerColophon}>
          <p class="caption">
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
              Made in
              <span className="weather">
                <Weather />
              </span>
              Bondi, Australia<span> © Copyright 2024</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
