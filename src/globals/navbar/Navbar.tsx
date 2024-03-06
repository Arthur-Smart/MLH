import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import LOGO from "../../../public/logo.svg";
import HUMBURGER_ICON from "../../../public/menu.svg"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Navbar() {
  return (
    <nav className={`${styles.nav} w-screen flex items-center justify-center px-5`}>
      <div className="container flex items-center justify-between p-2">
        <div className={`${styles.nav_left} flex`}>
          <Image
            src={LOGO}
            alt="Medical Learning Hub"
            height={80}
            width={80}
            className="cursor-pointer"
          />
          <div className={`${styles.links} flex items-center ml-5`}>
            <p className="font-medium text-lg hover:text-[#3E2C78] cursor-pointer">News</p>
            <p className="font-medium text-lg hover:text-[#3E2C78] ml-5 cursor-pointer">About</p>
          </div>
        </div>
        <div className={`${styles.nav_center}`}></div>
        <div
          className={`${styles.nav_right} flex items-center justify-between`}
        >
          <button className="bg-[#D91F4F] hover:bg-[#D04367] py-2 px-3 text-white rounded-[4px] font-medium text-lg">
            Event Organizer
          </button>
          <h1 className="ml-4 font-medium text-lg hover:text-[#3E2C78] cursor-pointer">Sign up/Join</h1>
          <Popover>
            <PopoverTrigger>
              <h3 className="ml-6 font-medium text-lg hover:text-[#3E2C78] ">English</h3>
            </PopoverTrigger>
            <PopoverContent className="mt-2 w-[150px] flex flex-col items-center justify-center">
             <p className="text-lg cursor-pointer hover:text-[#3E2C78]">English[En]</p>
             <p className="text-lg mt-2 cursor-pointer hover:text-[#3E2C78]">French[Fr]</p>
            </PopoverContent>
          </Popover>
        </div>
        <div className={styles.humburger__menu}>
          <Image src={HUMBURGER_ICON} alt="MLH Humburger Icon" width={25} height={25} className="mr-2"/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
