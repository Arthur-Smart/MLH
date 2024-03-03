import React from "react";
import styles from "./registered.module.css";
import Image from "next/image";
import FLYER from "../../../../public/flyer.svg";
import THUMB from "../../../../public/thumb.svg";
import CALENDAR from "../../../../public/calendar.svg";

const page = () => {
  return (
    <main className={`${styles.success} w-screen flex`}>
      <div
        className={`${styles.success_container} px-4 w-[50%] h-[90vh] flex flex-col items-center justify-center bg-[#3E2C78] w-[100%]`}
      >
        <div
          className={`${styles.success_message} flex flex-col w-full md:w-[70%] `}
        >
          <Image
            src={THUMB}
            alt="Medical Learning Hub"
            width={40}
            height={40}
            className="mb-2"
          />
          <h1 className="text-start text-white font-medium text-xl md:text-2xl ">
            You have already registered<br></br>
            for this activity.
          </h1>
          <p className="text-[#BBB5D0] text-base md:text-lg">
            (See below dates for event)
          </p>
        </div>

        {/* Time and date */}
        <div
          className={`${styles.time_date} flex items-center mt-14 md:w-[70%]`}
        >
          <div className="flex items-center">
            <Image src={CALENDAR} alt="" width={17} height={7} />
            <p className="text-white text-[14px] md:text-[15px]  ml-2">24 May 2024</p>
          </div>
          <div className="flex items-center ml-11">
            <Image src={CALENDAR} alt="" width={17} height={7} />
            <p className="text-white text-[14px] md:text-[15px] ml-2">
              10:00AM - 12:00PM
            </p>
          </div>
        </div>

        {/* Counter */}
        <div className={`${styles.counter} flex items-center mt-7 md:w-[70%]`}>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-bold text-2xl text-white">35</h2>
            <p className="text-white">Days</p>
          </div>
          <div className="flex flex-col items-center justify-center ml-[30px] md:ml-[60px]">
            <h2 className="font-bold text-2xl text-white">4</h2>
            <p className="text-white">Hours</p>
          </div>
          <div className="flex flex-col items-center justify-center ml-[30px] md:ml-[60px]">
            <h2 className="font-bold text-2xl text-white">16</h2>
            <p className="text-white">Mins</p>
          </div>
          <div className="flex flex-col items-center justify-center ml-[30px] md:ml-[60px]">
            <h2 className="font-bold text-2xl text-white">02</h2>
            <p className="text-white">Secs</p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.flyer_container} w-[50%] h-[90vh] overflow-hidden`}
      >
        <div className="h-[100%]">
          <Image
            src={FLYER}
            alt=""
            width={700}
            height={700}
            className={styles.flyer}
          />
        </div>
      </div>
    </main>
  );
};

export default page;
