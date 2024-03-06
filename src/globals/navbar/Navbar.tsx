"use client"

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import LOGO from "../../../public/logo.svg";
import SEARCH_ICON from "../../../public/search.svg"
import HUMBURGER_ICON from "../../../public/menu.svg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState("English")
  type LangType = {
    id: number;
    title: string;
  };

  const languages: LangType[] = [
    {
      id: 1,
      title: "English",
    },
    {
      id: 2,
      title: "French",
    },
  ];

  return (
    <nav
      className={`${styles.nav} w-screen flex items-center justify-center px-5 shadow-md`}
    >
      <div className="container flex items-center justify-between p-2 gap-2">
        <div className={`${styles.nav_left} flex w-[25%]`}>
          <Image
            src={LOGO}
            alt="Medical Learning Hub"
            height={80}
            width={80}
            className="cursor-pointer"
          />
          <div className={`${styles.links} flex items-center ml-5`}>
            <p className="font-medium text-base hover:text-[#3E2C78] cursor-pointer">
              News
            </p>
            <p className="font-medium text-base hover:text-[#3E2C78] ml-5 cursor-pointer">
              About
            </p>
          </div>
        </div>
        <div className={`${styles.nav_center} w-[45%] flex items-center justify-center`}>
          <Popover>
          <PopoverTrigger>
          <div className="rounded-full py-2 px-4 shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer">
          <p className="text-gray-400">Quick search</p>
          <div className="bg-[#D91F4F] p-2 rounded-full">
            <Image src={SEARCH_ICON} alt="" width={20} height={20}/>
          </div>
          </div>
          </PopoverTrigger>
          <PopoverContent className="w-[80vw] rounded-full mt-2 border-[1px] border-gray-200 flex items-center justify-between">
            <div>
              <p className="text-black font-medium">County</p>
              <select className="outline-0 bg-transparent text-[#8B8B8B]">
                <option >Where is the event hosted?</option>
                <option >Kenya</option>
                <option >Tanzania</option>
                <option >Ghana</option>
              </select>
            </div>
            <div className="h-11 w-[2px] bg-gray-200"></div>
            <div>
              <p className="text-black font-medium">Organization</p>
              <select className="outline-0 bg-transparent text-[#8B8B8B]">
                <option >Select organization</option>
                <option >Avenue HOspital</option>
                <option >Equity Afya</option>
                <option >Fyza</option>
              </select>
            </div>
            <div className="h-11 w-[2px] bg-gray-200"></div>
            <div>
              <p className="text-black font-medium">Type of activity</p>
              <select className="outline-0 bg-transparent text-[#8B8B8B]">
                <option >Select activity type</option>
                <option >Kenya</option>
                <option >Tanzania</option>
                <option >Ghana</option>
              </select>
            </div>
            <div className="h-11 w-[2px] bg-gray-200"></div>
            <div>
              <p className="text-black font-medium">Activity name</p>
              <input className="outline-0 bg-transparent text-[#8B8B8B]" type="text" placeholder="Enter activity name"/>
              
            </div>
            <div className="p-3 rounded-full bg-[#D91F4F] hover:bg-[#D91F4F]/80 cursor-pointer">
            <Image src={SEARCH_ICON} alt="" width={20} height={20}/>
            </div>
          </PopoverContent>
          </Popover>
          
        </div>
        <div
          className={`${styles.nav_right} flex items-center justify-between w-[30%]`}
        >
          <button className="bg-[#D91F4F] hover:bg-[#D04367] py-2 px-3 text-white rounded-[4px] font-medium text-base">
            Event Organizer
          </button>
          <h1 className="ml-4 font-medium text-base hover:text-[#3E2C78] cursor-pointer">
            Sign up/Join
          </h1>
          <Popover>
            <PopoverTrigger>
              <h3 className="ml-6 font-medium text-base hover:text-[#3E2C78] ">
                {selectedLanguage}
              </h3>
            </PopoverTrigger>
            <PopoverContent className="mt-2 w-[150px] flex flex-col items-center justify-center">
              {languages.map((language) => (
                <p onClick={() => setSelectedLanguage(language.title)} className="text-lg cursor-pointer hover:text-[#3E2C78]">
                  {language.title}
                </p>
              ))}
            </PopoverContent>
          </Popover>
        </div>
        <div className={styles.humburger__menu}>
          <Image
            src={HUMBURGER_ICON}
            alt="MLH Humburger Icon"
            width={25}
            height={25}
            className="mr-2"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
