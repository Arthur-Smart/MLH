"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import CALENDAR from "../../public/calendar.svg";
import CLOCK from "../../public/time.svg";
import FLYER from "../../public/flyer.svg";
import FulltimeForm from "@/globals/fulltimeform/FulltimeForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { IEmail } from "@/interface/FormInterface";
import VisitorsForm from "@/globals/visitorsform/VisitorsForm";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isEmail, setIsEmail] = useState(false);

  const filterStaffsRef = useRef<HTMLDivElement>(null);
  const formsRef = useRef<HTMLDivElement>(null);

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
    setIsEmail(true);
  };

  // Scroll to filter staffs radio buttons
  useEffect(() => {
    filterStaffsRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [isEmail]);

  // Scroll to forms
  useEffect(() => {
    formsRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [selectedOption]);

  return (
    <main className="main ">
      <div className="registration w-[100%] h-full flex">
        <div className="form px-4 w-[50%] h-full flex flex-col items-center justify-center bg-[#3E2C78] w-[100%]`">
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="email_form flex mt-9"
          >
            <input
              {...register("email", {
                required: true,
                validate: (value) => {
                  if (!value.includes("@")) {
                    return "This is not a valid email";
                  }
                  return true;
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
              className="email_btn py-[10px] px-[15px] ml-2 outline-none rounded-[4px] bg-[#AAA2C4] text-[#2C2C74]"
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
        <div className="flyer_container w-[50%] h-[90vh]">
          <div className="h-[100%]">
            <Image
              src={FLYER}
              alt=""
              width={700}
              height={700}
              className="flyer"
            />
          </div>
        </div>
      </div>

      {/* FIlter forms */}
      {isEmail && (
        <div className="container">
          <h1 className="font-bold text-[16px] mt-4">Type of staff</h1>
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

      <div ref={filterStaffsRef} />

      {/*Registration forms goes here*/}
      <div className="container mt-5">
        {/* Fulltime & locum staffs form */}
        {selectedOption == "full-staff" && <FulltimeForm />}
        {selectedOption == "locum" && <FulltimeForm />}
        {/* Visitors form */}
        {selectedOption == "external" && <VisitorsForm />}
      </div>
      <div ref={formsRef} />
    </main>
  );
}
