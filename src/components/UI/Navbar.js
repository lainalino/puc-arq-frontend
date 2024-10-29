import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <a href="/blog" className={styles.navLink}>
            Blog
          </a>
        </li>
        <li>
          <a href="/about" className={styles.navLink}>
            About
          </a>
        </li>
        <li>
          <a href="/description" className={styles.navLink}>
          Description
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
