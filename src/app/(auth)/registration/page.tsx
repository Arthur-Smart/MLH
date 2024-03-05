"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import CALENDAR from "../../../../public/calendar.svg";
import CLOCK from "../../../../public/time.svg";
import FLYER from "../../../../public/flyer.svg";
import CERTIFICATE from "../../../../public/certificate.svg"
import LANGUAGE from "../../../../public/language.svg"
import { SubmitHandler, useForm } from "react-hook-form";
import { IEmail } from "@/interface/FormInterface";
import styles from "./registration.module.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

  return (
    <main className="main">
      <section className={`${styles.registration} w-[100%] h-full flex`}>
        <div
          className={`${styles.form} px-4 w-[50%] h-full flex flex-col items-center justify-center bg-[#3E2C78] w-[100%]`}
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
            <Dialog>
              <DialogTrigger>
                <input
                  disabled={!isDirty || !isValid}
                  className="email_btn py-[10px] px-[15px] ml-2 outline-none rounded-[4px] bg-[#AAA2C4] font-medium text-[#2C2C74]"
                  type="submit"
                  value="Access Activity"
                />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Register for the activity</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </form>
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="flyer_container w-[50%] h-[100%} overflow-hidden">
          <div className="h-[100%]">
            <Image
              src={FLYER}
              alt=""
              width={1300}
              height={1300}
              className="flyer"
              priority
            />
          </div>
        </div>
      </section>

      {/* Activity Details */}
      <section className="container flex flex-col py-10">
        <div className="w-full flex items-center gap-5">
          <div className="flex items-center">
            <Image src={CERTIFICATE} alt="CPD Certificates" width={25} height={25}/>
            <p className="text-base font-medium ml-2">CPD certificate</p>
          </div>
          <div className="flex items-center">
            <Image src={LANGUAGE} alt="Activity Language" width={30} height={30}/>
            <p className="text-base font-medium ml-2">CPD certificate</p>
          </div>
          <div className="rounded-full bg-[#AAA2C4] px-5 py-2">
            <p className="text-[#2C2C74]">Free</p>
          </div>
        </div>
      </section>
    </main>
  );
}
