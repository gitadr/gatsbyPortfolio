import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router"; // Import useLocation from @reach/router
import styles from "./navbar.module.css";

const Navigation = () => {
  const location = useLocation();
  const currentPagePath = location.pathname;

  // Define the page icons mapping
  const pageIcons = {
    "/": "👋",
    "/about/": "🏔️",
    "/journal/": "💭",
    "/projects/": "🚀",
    "/article_190219_SteveJobs/": "🏴‍☠️",
  };

  // Get the emoji icon for the current page
  const currentIcon = pageIcons[currentPagePath] || "👋"; // Default emoji for unknown pages

  return (
    <nav>
      <div className={styles.navWrapper}>
        <div className={styles.navLogo}>
          <Link to="/">
            <div className={styles.navLogoIcon}>
              <p className="navLogoIconLorem">{currentIcon}</p>
            </div>
          </Link>
        </div>
        <div className={styles.navItems}>
          <ul>
            <li>
              <Link to="/journal" activeClassName="active">
                Journal
              </Link>
            </li>
            <li>
              <Link to="mailto:mail@aaronroot.net" activeClassName="active">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
