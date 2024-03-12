"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";

import Image from "next/image";
import CALENDAR from "../../../../../public/calendar.svg";
import CLOCK from "../../../../../public/time.svg";
import FLYER from "../../../../../public/flyer.svg";
import CLOSE_ICON from "../../../../../public/close.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { IEmail } from "@/interface/FormInterface";
import styles from "./registration.module.css";

import EventDetails from "@/globals/eventdetails/EventDetails";
import FulltimeForm from "@/globals/fulltimeform/FulltimeForm";
import VisitorsForm from "@/globals/visitorsform/VisitorsForm";
import apiService from "@/libs/utils";
import { IActivity, IOrganization } from "@/interface/ActivityInterface";
import { getOrganization } from "@/endpoints/endpoints";

export default function Home() {
  // FORM STATES
  const [selectedOption, setSelectedOption] = useState(null);
  const [isEmail, setIsEmail] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [event, setEvent] = useState<IActivity>();
  // console.log("THIS ARE THE EVENT DETAILS", event);

  // EVENTS DAYS HOURS MINS SECS COUNTER
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hasHappened, setHasHappened] = useState<Boolean>(false);
  const [organization, setOrganization] = useState<IOrganization>();
  const ActivityDetailRef = useRef<HTMLDivElement>(null);

  const scrollToActivityDetails = () => {
    if (ActivityDetailRef.current) {
      ActivityDetailRef?.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleOptionChange = (option: any) => {
    setSelectedOption(option);
  };

  // GET ACTIVITY DETAILS
  const { slug } = useParams();

  useEffect(() => {
    getActivity();
  }, []);

  // GET ACTIVITY
  const getActivity = useCallback(async () => {
    const activity: any = await apiService.get(`api/v1/events/${slug}`);

    const activityRes = JSON.stringify(activity);
    const data = JSON.parse(activityRes);
    const eventDetails = data.response[0].details[0].data;

    setEvent(eventDetails);
  }, []);

  console.log("ACTIVITY ACTIVITY", event);

  // console.log(event)

  //GET ORGANIZATION
  // useEffect(async():Promise<void> => {
  //   if (event && event.organization_id) {
  //     const data:any = await getOrganization(event.organization_id);
  //     setOrganization(data)
  //   }
  // },[event]);

  //GET ORGANIZATION
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      if (event && event.organization_id) {
        try {
          const data: any = await getOrganization(event.organization_id);
          setOrganization(data);
          console.log("DTAT =>", data);
        } catch (error) {
          console.error("Error fetching organization:", error);
        }
      }
    };

    fetchData();
  }, [event]);

  // const getOrganization = async () => {
  //   try {
  //     if (!event || !event.organization_id) {
  //       // Handle the case where event or organization_id is not available
  //       return;
  //     }

  //     const organizationRes: IActivity = await apiService.get(`api/v1/organization/${event.organization_id}`);
  //     const org = JSON.stringify(organizationRes);
  //     const data = JSON.parse(org);
  //     const organizationData = data.response[0].details[0].data;

  //     console.log(organizationData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //COUNTER
  setInterval(updateCountdown, 1000);

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

      // console.log(`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`);
    } else {
      // console.log("The event has already occurred.");
      setHasHappened(true);
    }
  }

  // REGISTER FOR AN ACTIVITY
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<IEmail>();
  const onSubmit: SubmitHandler<IEmail> = (data) => {
    console.log(data);
    setIsEmail(true);
    setShowModal(true);
    setTimeout(() => {
      setContentLoaded(true);
    }, 1500);
  };

  return (
    <main className={styles.main}>
      <section className={`${styles.registration} w-[100%] h-full flex`}>
        <div
          className={`${styles.form} px-4 w-[50%] h-full flex flex-col items-center justify-center bg-[#3E2C78] w-[100%]`}
        >
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-2xl md:text-3xl text-white">
              {organization?.name}
            </h1>
            <p className="text-white text-md md:text-xl">
              {event && event.title}
            </p>
          </div>

          {/* Counter */}
          <div className="flex items-center mt-7">
            {hasHappened ? (
              <p className="text-white text-center">
                The learning activity has already happened.<br></br> However, the
                learning materials are available. Please Register to access
                them.Thank you!
              </p>
            ) : (
              <>
                {/* Time and date */}
                <div className="flex items-center justify-center mt-8">
                  <div className="flex items-center">
                    <Image src={CALENDAR} alt="" width={17} height={7} />
                    <p className="text-white text-[14px] md:text-[15px] ml-2">
                      {event && event.start_date.slice(0, 10)}
                    </p>
                  </div>
                  <div className="flex items-center ml-11">
                    <Image src={CLOCK} alt="" width={19} height={9} />
                    <p className="text-white text-[14px] md:text-[15px] ml-2">
                      {event && event.start_date.slice(11, 16)}AM
                    </p>
                  </div>
                </div>
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
              </>
            )}
          </div>

          {/* Email input field */}
          <div className="flex"></div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${styles.email_form} flex mt-9`}
          >
            <input
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "This is not a valid email",
                },
              })}
              type="email"
              placeholder="Enter your email"
              className={
                errors.email
                  ? "py-[10px] px-[15px] outline-none rounded-[4px] w-[250px] border-[1px] border-[red]"
                  : "py-[10px] px-[15px] outline-none rounded-[4px] w-[250px]"
              }
            />
            <input
              disabled={!isDirty || !isValid}
              className={`${styles.email_btn}  py-[10px] px-[15px] ml-2 outline-none rounded-[4px] bg-[#AAA2C4] font-medium text-[#2C2C74] cursor-pointer`}
              type="submit"
              value="Access Activity"
            />
          </form>
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}

          {/*Form Dialog */}
          <section
            className={
              showModal
                ? ` ${styles.dialog} ${styles.show} flex items-center justify-center`
                : ` ${styles.dialog} flex items-center justify-center`
            }
          >
            {contentLoaded && (
              <>
                <div
                  className={
                    selectedOption == null
                      ? `${styles.radio_height} overflow-y-scroll no-scrollbar  bg-white rounded-md  px-5 py-3`
                      : `${styles.forms_container} overflow-y-scroll no-scrollbar  bg-white rounded-md  px-5 py-3`
                  }
                >
                  <div className="w-full flex items-center justify-between">
                    <p className="text-lg text-start  font-semibold">
                      Register for the activity
                    </p>
                    <div
                      onClick={() => setShowModal(false)}
                      className="cursor-pointer h-7 w-7 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/30"
                    >
                      <Image src={CLOSE_ICON} alt="" width={12} height={12} />
                    </div>
                  </div>
                  <p className="text-lg text-start text-black/70 mt-3">
                    Type of staff
                  </p>

                  <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between mt-[3px]">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        checked={selectedOption === "fulltime"}
                        onChange={() => handleOptionChange("fulltime")}
                      />
                      <p className="ml-2 text-base text-black">
                        Fulltime Avenue Staff
                      </p>
                    </div>
                    <div className="flex items-center mb-[2px]  md:mb-[0] text-[16px]">
                      <input
                        type="radio"
                        checked={selectedOption === "locum"}
                        onChange={() => handleOptionChange("locum")}
                      />
                      <p className="ml-2  text-black">Locum Avenue Staff</p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        checked={selectedOption === "external"}
                        onChange={() => handleOptionChange("external")}
                      />
                      <p className="ml-2 text-[16px] text-black">
                        External/Visitor
                      </p>
                    </div>
                  </div>
                  <div className="w-full  flex flex-wrap">
                    {selectedOption == "fulltime" && <FulltimeForm />}
                    {selectedOption == "locum" && <FulltimeForm />}
                    {selectedOption == "external" && <VisitorsForm />}
                  </div>
                </div>
              </>
            )}
          </section>
        </div>
        <div
          className={`${styles.flyer_container} w-[50%] h-[100%} overflow-hidden`}
        >
          {organization?.banner_image ? (
            <div className="h-[100%]">
              <Image
                src={organization.banner_image}
                alt=""
                width={1300}
                height={1300}
                className={styles.flyer}
                priority
              />
            </div>
          ) : (
            <div className="h-[100%]">
              <Image
                src={FLYER}
                alt=""
                width={1300}
                height={1300}
                className={styles.flyer}
                priority
              />
            </div>
          )}
        </div>
      </section>

      {/* Activity Details */}
      <section ref={ActivityDetailRef} className="container flex flex-col py-7">
        {event && <EventDetails {...event} />}
      </section>
    </main>
  );
}
