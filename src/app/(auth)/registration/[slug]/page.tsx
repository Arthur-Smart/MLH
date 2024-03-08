"use client";

import React, { useState, useRef } from "react";
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

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isEmail, setIsEmail] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

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
              Avenue Hospital Event
            </h1>
            <p className="text-white text-md md:text-xl">
              Brain Tumor Association of Africa
            </p>
          </div>

          {/* Time and date */}
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center">
              <Image src={CALENDAR} alt="" width={17} height={7} />
              <p className="text-white text-[14px] md:text-[15px] ml-2">
                24 May 2024
              </p>
            </div>
            <div className="flex items-center ml-11">
              <Image src={CLOCK} alt="" width={19} height={9} />
              <p className="text-white text-[14px] md:text-[15px] ml-2">
                10:00AM - 12:00PM
              </p>
            </div>
          </div>

          {/* Counter */}
          <div className="flex items-center mt-7">
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

            {/* <Dialog>
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

              <DialogTrigger>
                <input
                  disabled={!isDirty || !isValid}
                  className={`${styles.email_btn}  py-[10px] px-[15px] ml-2 outline-none rounded-[4px] bg-[#AAA2C4] font-medium text-[#2C2C74] cursor-pointer`}
                  type="submit"
                  value="Access Activity"
                />
              </DialogTrigger>
              <DialogContent className=" md:min-w-[850px] overflow-y-scroll h-[500px] no-scrollbar">
                <DialogHeader>
                  <DialogTitle className="text-xl text-start mt-7 font-semibold">
                    Register for the activity
                  </DialogTitle>
                  <DialogDescription>
                    <p className="text-lg text-start text-black font-medium">
                      Type of staff
                    </p>
                    <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between mt-3">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          checked={selectedOption === "fulltime"}
                          onChange={() => handleOptionChange("fulltime")}
                        />
                        <p className="ml-2 text-base text-black">Fulltime Avenue Staff</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          checked={selectedOption === "locum"}
                          onChange={() => handleOptionChange("locum")}
                        />
                        <p className="ml-2 text-base text-black">Locum Avenue Staff</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          checked={selectedOption === "external"}
                          onChange={() => handleOptionChange("external")}
                        />
                        <p className="ml-2 text-base text-black">External/Visitor</p>
                      </div>
                    </div>
                    <div className="w-full mt-3 flex flex-wrap">
                      {selectedOption == "fulltime" && <FulltimeForm />}
                      {selectedOption == "locum" && <FulltimeForm />}
                      {selectedOption == "external" && <VisitorsForm />}
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog> */}
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

          <div
            onClick={scrollToActivityDetails}
            className="animate-bounce w-14 h-14 mt-11 cursor-pointer bg-[#AAA2C4] rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </div>
        </div>
        <div
          className={`${styles.flyer_container} w-[50%] h-[100%} overflow-hidden`}
        >
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
        </div>
      </section>

      {/* Activity Details */}
      <section
        ref={ActivityDetailRef}
        className="container flex flex-col py-10"
      >
        <EventDetails />
      </section>
    </main>
  );
}
