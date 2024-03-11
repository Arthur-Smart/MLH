import React from "react";
import styles from "./activity.module.css";

import Image from "next/image";
import ACTIVITY_IMAGE from "../../../public/doc.jpg";
import CLOCK from "../../../public/clock.svg"
import CALENDAR from "../../../public/calenda.svg"
import CERT from "../../../public/cert.svg"
import ONLINE from "../../../public/online.svg"
import MONEY from "../../../public/money.svg"
import Link from "next/link";

const Activity = () => {
  return (
    <div
      className={`${styles.activity_container} rounded overflow-hidden border-gray-200 border-[1px]`}
    >
      <Image
        src={ACTIVITY_IMAGE}
        alt=""
        width={400}
        height={500}
        style={{
          objectFit: "cover",
        }}
        className="h-[45%] w-full"
      />
      <div className="p-2">
        <h1 className="font-medium text-[15px]">CME in Hematological Diseases & Cancer</h1>
        <p className="text-[#333333] text-[14px]">
          Coping with long-term effects of acute myeloid leukimia (AML) &
          identifying patient support needs
        </p>
        <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-[4px]">
                <Image src={CALENDAR} alt="CMEs calenda" width={15} height={15}/>
                <p className="text-[14px] text-black/70">09 April 2024</p>
            </div>
            <div className="flex items-center gap-[4px]">
                <Image src={CLOCK} alt="CMEs calenda" width={20} height={20}/>
                <p className="text-[14px] text-black/70">10am - 1:00pm</p>
            </div>
        </div>
        <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-[4px]">
                <Image src={CERT} alt="CMEs calenda" width={21} height={21}/>
                <p className="text-[14px] text-black/70">Certificate</p>
            </div>
            <div className="flex items-center gap-[4px]">
                <Image src={MONEY} alt="CMEs calenda" width={20} height={20}/>
                <p className="text-[14px] text-black/70">Paid</p>
            </div>
        </div>
        <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-[4px]">
                <Image src={ONLINE} alt="CMEs calenda" width={21} height={21}/>
                <p className="text-[14px] text-black/70">Online</p>
            </div>
           
        </div>
        <div className="flex items-center justify-between mt-4">
            <Link href="/registration/avenue">
            <button className="bg-[#3E2C78] hover:bg-[#3E2C78]/90 text-white py-2 px-4 rounded">Register</button>
            </Link>

            <Link href="/institution/avenue">
                <Image src={ACTIVITY_IMAGE} alt="Institution Name" height={200} width={200} className={styles.institution_logo}/>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Activity;
