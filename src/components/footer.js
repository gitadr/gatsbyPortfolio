import React from "react";
import styles from "./footer.module.css";
import Weather from "./weather";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerColophon}>
          <p className="caption">
            A small experiment in craft and code. Built with{" "}
            <a
              href="https://www.gatsbyjs.com"
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
            , and deployed through{" "}
            <a
              href="https://www.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
            . Typeset in{" "}
            <a
              href="https://rsms.me/inter/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inter
            </a>
            , an open-source typeface by{" "}
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
          <p className={`caption ${styles.footerCopyrightContent}`}>
            <span className={styles.footerLocation}>
              <span>Made in</span>
              <span className="weather">
                <Weather />
              </span>
              <span>Bondi, Australia</span>
            </span>
            <span className={styles.footerLegal}>
              © Copyright {new Date().getFullYear()}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
