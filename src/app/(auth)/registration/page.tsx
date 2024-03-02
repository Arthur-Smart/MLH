"use client";

import React, { useState, useRef } from "react";
import styles from "./registration.module.css";
import Image from "next/image";
import CALENDAR from "../../../../public/calendar.svg";
import FLYER from "../../../../public/flyer.svg";
import FulltimeForm from "@/globals/fulltimeform/FulltimeForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { IEmail } from "@/interface/FormInterface";
import VisitorsForm from "@/globals/visitorsform/VisitorsForm";

const page = () => {
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isEmail, setIsEmail] = useState(false);
 
  const partnersRef = useRef<HTMLDivElement >(null)

  console.log(selectedOption);
  const handleRadioChange = (option: any) => {
    setSelectedOption(option);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<IEmail>();
  const onSubmit: SubmitHandler<IEmail> = (data) => {
    console.log(data);
    setIsEmail(true)

    const element = document.getElementById('partners');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

  //   if (partnersRef.current) {
  //     partnersRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  // }
}



  return (
    <main className={`${styles.main} h-[90vh]`}>
      <div className={`${styles.registration} w-[100%]  flex`}>
        <div
          className={`${styles.form} px-4 w-[50%] h-[90vh] flex flex-col items-center justify-center bg-[#3E2C78] w-[100%]`}
        >
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-2xl md:text-4xl text-white">
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
              <p className="text-white text-[15px] ml-2">24 May 2024</p>
            </div>
            <div className="flex items-center ml-11">
              <Image src={CALENDAR} alt="" width={17} height={7} />
              <p className="text-white sm:text-[14px] text-[15px] ml-2">
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${styles.email_form} flex mt-9`}
          >
            <input
              {...register("email", {
                required: "Email is required",
                validate: (value) => {
                  if (!value.includes("@")) {
                    return "This is not a valid email";
                  }
                  return true;
                },
              })}
              type="email"
              placeholder="Enter your email"
              className="py-[10px] px-[15px] outline-none rounded-[4px] w-[250px]"
            />
            <input
              disabled={!isDirty || !isValid}
              className={`${styles.email_btn} py-[10px] px-[15px] ml-2 outline-none rounded-[4px] bg-[#AAA2C4] text-[#2C2C74]`}
              type="submit"
              value="Access Activity"
            />
          </form>
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
          {/* <form>
            <input
              type="email"
              className="py-[10px] px-[15px] ml-2 outline-none rounded-[4px]  text-[#2C2C74]"
              placeholder="Please Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              disabled={isDisabled}
              className={`${styles.form_btn} py-[10px] px-[15px] ml-2 outline-none rounded-[4px] bg-[#AAA2C4] text-[#2C2C74]`}
            >
              Access Activity
            </button>
          </form> */}
        </div>
        <div className={`${styles.flyer_container} w-[50%] h-[90vh]`}>
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
      </div>

      {/* FIlter forms */}
      {isEmail && (
        <div id="partners" ref={partnersRef} className="container">
          <h1 className="font-bold text-[16px] mt-4">Partners</h1>
          <div className="flex  mt-2 flex flex-col md:flex-row pb-6">
            <div className="flex items-center">
              <input
                type="radio"
                checked={selectedOption === "full-staff"}
                onChange={() => handleRadioChange("full-staff")}
              />
              <p className="ml-2">Fulltime Avenue Staff</p>
            </div>
            <div className="flex items-center md:ml-4">
              <input
                type="radio"
                checked={selectedOption === "locum"}
                onChange={() => handleRadioChange("locum")}
              />
              <p className="ml-2">Locum Avenue staff</p>
            </div>
            <div className="flex items-center md:ml-4">
              <input
                type="radio"
                checked={selectedOption === "external"}
                onChange={() => handleRadioChange("external")}
              />
              <p className="ml-2">External/Visitor</p>
            </div>
          </div>
        </div>
      )}

      {/*Registration forms goes here*/}
      <div className="container mt-5">
        {/* <FulltimeForm /> */}
        {selectedOption == "full-staff" && <FulltimeForm />}
        {selectedOption == "locum" && <FulltimeForm />}
        {selectedOption == "external" && <VisitorsForm />}
      </div>
    </main>
  );
};

export default page;
