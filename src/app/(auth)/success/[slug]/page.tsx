"use client"

import React, { useEffect, useState } from "react";
import styles from "./success.module.css";
import Image from "next/image";
import FLYER from "../../../../../public/flyer.svg";
import ENVELOP from "../../../../../public/envelop.svg";
import CALENDAR from "../../../../../public/calendar.svg";
import CLOCK from "../../../../../public/time.svg";
import EventDetails from "@/globals/eventdetails/EventDetails";
import { useParams } from "next/navigation";

import axios from "axios"
import { IActivity } from "@/interface/ActivityInterface";

const page = () => {
  const {slug} = useParams();

  const [event, setEvent] = useState<IActivity>();

    // EVENTS DAYS HOURS MINS SECS COUNTER
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

  // GET EVENT DETAILS
  const getEvent = async () => {
    try {
      const data = await axios.get(`https://api-mlh.vercel.app/api/v1/events/${slug}`)
      console.log(data.data.response[0].details[0].data)
      setEvent(data.data.response[0].details[0].data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
getEvent();
  },[]);

  // GET EVENT DATE COUNTDOWN
  function updateCountdown() {
    const eventDate: any = new Date(event?.start_date ?? "");

    const currentDate: any = new Date();

    const timeDifference = eventDate - currentDate;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    } else {
      // console.log("The event has already occurred.");
    }
  }

   //COUNTER
   setInterval(updateCountdown, 1000);

  return (
    <main className=" w-screen flex flex-col">
      <section className={`${styles.success} w-full flex`}>
      <div
        className={`${styles.success_container} px-4 w-[50%] h-[90vh] flex flex-col items-center justify-center bg-[#3E2C78] w-[100%]`}
      >
        <div className={`${styles.success_message} flex flex-col md:w-[70%]`}>
          <Image
            src={ENVELOP}
            alt="Medical Learning Hub"
            width={40}
            height={40}
            className="mb-2"
          />
          <h1 className="text-start text-white font-medium text-xl md:text-2xl">
            Registration successfull. <br></br>
            Access link has been sent to your email.
          </h1>
          <p className="text-[#BBB5D0] text-base">
            (See below dates for event)
          </p>
        </div>

        {/* Time and date */}
        <div className={`${styles.time_date} flex items-center mt-14 md:w-[70%]`}>
          <div className="flex items-center">
            <Image src={CALENDAR} alt="" width={17} height={7} />
            <p className="text-white text-[14px] md:text-[15px] ml-2"> {event && event.start_date.slice(0, 10)}</p>
          </div>
          <div className="flex items-center ml-11">
          <Image src={CLOCK} alt="" width={19} height={9} />
            <p className="text-white text-[14px] md:text-[15px] ml-2">
            {event && event.start_date.slice(11, 16)}AM
            </p>
          </div>
        </div>

        {/* Counter */}
        <div className={`${styles.counter} flex items-center mt-7 md:w-[70%]`}>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-bold text-2xl text-white">{days}</h2>
            <p className="text-white">Days</p>
          </div>
          <div className="flex flex-col items-center justify-center ml-[30px] md:ml-[60px]">
            <h2 className="font-bold text-2xl text-white">{hours}</h2>
            <p className="text-white">Hours</p>
          </div>
          <div className="flex flex-col items-center justify-center ml-[30px] md:ml-[60px]">
            <h2 className="font-bold text-2xl text-white">{minutes}</h2>
            <p className="text-white">Mins</p>
          </div>
          <div className="flex flex-col items-center justify-center ml-[30px] md:ml-[60px]">
            <h2 className="font-bold text-2xl text-white">{seconds}</h2>
            <p className="text-white">Secs</p>
          </div>
        </div>
        
      </div>
      <div className={`${styles.flyer_container} w-[50%] h-[90vh] overflow-hidden`}>
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
      </section>

      {/* Activity Details */}
      <section className="container flex flex-col py-10">
        {/* <EventDetails /> */}
      </section>
    </main>
  );
};

export default page;
