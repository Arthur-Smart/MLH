import React from "react";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={`${styles.nav} w-screen`}>
      <div className="container">
        <div className={`${styles.nav_left}`}></div>
        <div className={`${styles.nav_center}`}></div>
        <div className={`${styles.nav_right}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
