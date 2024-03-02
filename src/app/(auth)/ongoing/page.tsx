import React from "react";
import styles from "./ongoing.module.css";
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
        <div className={`${styles.success_message} flex flex-col `}>
         
          <h1 className="text-center text-white font-medium text-base md:text-[28px]">
           Activity is Ongoing
          </h1>
          <p className="text-[#BBB5D0] text-center text-md">
            You can join using the button below
          </p>
        </div>
<button className="bg-[#AAA2C4] w-[250px] py-2 px-2 rounded-sm text-[#2C2C74] mt-11">Join now</button>
       
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
