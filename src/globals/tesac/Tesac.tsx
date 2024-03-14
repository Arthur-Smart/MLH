"use client"

import { IActivity, IOrganization } from '@/interface/ActivityInterface'
import Image from 'next/image'
import ACTIVITY_IMAGE from "../../../public/doc.jpg";
import CLOCK from "../../../public/clock.svg";
import CALENDAR from "../../../public/calenda.svg";
import CERT from "../../../public/cert.svg";
import ONLINE from "../../../public/online.svg";
import MONEY from "../../../public/money.svg";
import AVAILABLE_ICON from "../../../public/success.svg";

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import styles from "./tesac.module.css";
import apiService from '@/libs/utils';

const Tesac = ({activity}:{activity:IActivity}) => {
    const [organization, setOrganization] = useState<IOrganization>();
    
  //GET ALL THE ACTIVITIES
   const getOrganization =  async () => {
    try {
      const orgDetails: any =  await apiService.get(`api/v1/organization/${activity.organization_id}`);
    //   setActivities(acts.results);
    // const eventDetails = jsonResponse.response[0]?.details[0]?.data;

    console.log("IT WORKS =>", orgDetails.response[0]?.details[0]?.data)
    setOrganization(orgDetails.response[0]?.details[0]?.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("eyeyeye")
    getOrganization();
  },[]);

  return (
    <div
    className={`${styles.activity_container} rounded overflow-hidden border-gray-200 border-[1px]`}
  >
    {activity.banner && (
        <Link href={`/institution/${activity.organization_id}`}>
      <Image
        src={activity.banner}
        alt=""
        width={400}
        height={500}
        style={{
          objectFit: "cover",
        }}
        className="h-[45%] w-full"
      />
      </Link>
    )}

    <div className="p-2">
      <h1 className="font-medium text-[15px]">{activity.title}</h1>
      <p className="text-[#333333] text-[14px]">{activity.description.slice(0, 20)}</p>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-[4px]">
          <Image src={CALENDAR} alt="CMEs calenda" width={15} height={15} />
          <p className="text-[14px] text-black/70">
            {activity.start_date?.slice(0, 10)}
          </p>
        </div>
        <div className="flex items-center gap-[4px]">
          <Image src={CLOCK} alt="CMEs calenda" width={20} height={20} />
          <p className="text-[14px] text-black/70">
            {activity.start_date?.slice(11, 16)}AM
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3">
        {activity.is_cert_available && (
          <div className="flex items-center gap-[4px]">
            <Image src={CERT} alt="CMEs calenda" width={21} height={21} />
            <p className="text-[14px] text-black/70">Certificate</p>
          </div>
        )}
        {activity.cpd >= 1 && (
          <div className="flex items-center gap-[4px]">
            <Image
              src={AVAILABLE_ICON}
              alt="CMEs calenda"
              width={19}
              height={19}
            />
            <p className="text-[14px] text-black/70">CPD</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between mt-3">
        {activity.is_online ? (
          <div className="flex items-center gap-[4px]">
            <Image src={ONLINE} alt="CMEs calenda" width={21} height={21} />
            <p className="text-[14px] text-black/70">Online</p>
          </div>
        ) : (
          <div className="flex items-center gap-[4px]">
            <Image src={ONLINE} alt="CMEs calenda" width={21} height={21} />
            <p className="text-[14px] text-black/70">Hybrid</p>
          </div>
        )}
        {activity.event_type == "free" ? (<div className="flex items-center gap-[4px]">
          <Image src={MONEY} alt="CMEs calenda" width={20} height={20} />
          <p className="text-[14px] text-black/70">Free</p>
        </div>) : (<div className="flex items-center gap-[4px]">
          <Image src={MONEY} alt="CMEs calenda" width={20} height={20} />
          <p className="text-[14px] text-black/70">Paid</p>
        </div>)}
        
      </div>
      <div className="flex items-center justify-between mt-4">
        <Link href={`/registration/${activity.id}`}>
          <button className="bg-[#3E2C78] hover:bg-[#3E2C78]/90 text-white py-2 px-4 rounded">
            Register
          </button>
        </Link>

{organization?.logo ? (<Link href={`/institution/${activity.organization_id}`}>
          <Image
            src={organization.logo}
            alt="Institution Name"
            height={200}
            width={200}
            className={styles.institution_logo}
          />
        </Link>) : (<Link href={`/institution/${activity.organization_id}`}>
          <Image
            src={ACTIVITY_IMAGE}
            alt="Institution Name"
            height={200}
            width={200}
            className={styles.institution_logo}
          />
        </Link>)}
        
      </div>
    </div>
  </div>
  )
}

export default Tesac