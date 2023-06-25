import React from "react";
import { Link } from "gatsby";
import styles from "./navbar.module.css";

const Navigation = () => {
  return (
    <nav>
      <div className={styles.navWrapper}>
        <div className={styles.navLogo}>
          <Link to="/">
            <div className={styles.navLogoIcon}>
              <p className="navLogoIconLorem">👋</p>
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
                {" "}
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
