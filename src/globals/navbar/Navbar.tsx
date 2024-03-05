import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import LOGO from "../../../public/logo.svg"

function Navbar() {
  return (
    <nav className={`${styles.nav} w-screen`}>
      <div className="container flex items-center justify-between p-2">
        <div className={`${styles.nav_left} flex`}>
          <Image src={LOGO} alt="Medical Learning Hub" height={80} width={80}/>
          <div className="flex items-center">
<p className="font-medium">News</p>
<p className="font-medium">About</p>
          </div>
        </div>
        <div className={`${styles.nav_center}`}></div>
        <div className={`${styles.nav_right}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
