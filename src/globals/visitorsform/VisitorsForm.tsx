"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./visitorsform.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "@/interface/FormInterface";
import axios from "axios";
import { IProfession } from "@/interface/ActivityInterface";

const VisitorsForm = ({
  departments,
  wards,
  selectedOption,
  locations,
  event_id,
  email,
}: any) => {
  const router = useRouter();
  const [apiRes, setApiRes] = useState<string | undefined>();
  const [professions, setProfessions] = useState<IProfession[]>([]);

  //GET PROFESSIONS
  const getProffesion = async () => {
    await fetch("https://api-mlh.vercel.app/api/v1/professions/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setProfessions(json.results);
      })
      .catch((error: any) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getProffesion();
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  // const onSubmit: SubmitHandler<Inputs> = async (data) => {
  //   await  new Promise((resolve) => setTimeout(resolve, 2500));

  //   console.log(data)
  //   router.push("/success")};

  // REGISTER FOR AN ACTIVITY
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    delete data.skip;
    delete data.terms;
    console.log(data);
    try {
      // }
      let res: any = await axios.post(
        "https://api-mlh.vercel.app/api/v1/events/enrollment/users",
        JSON.stringify(data),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log("THIE =>", res.data.response[0].details[0].message);
      setApiRes(res.data.response[0].details[0].message);

      // if(apiRes){
      router.replace(`/success/${event_id}`);
      // }
    } catch (error) {
      console.log("THIS IS THE ERROR =>", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col ">
      <input
        defaultValue={event_id}
        {...register("event_id", { required: true })}
        readOnly
        style={{ display: "none" }}
      />

      <input
        defaultValue={selectedOption}
        {...register("type", { required: true })}
        readOnly
        style={{ display: "none" }}
      />

      <input
        defaultValue="3fa85f64-5717-4562-b3fc-2c963f66afa6"
        {...register("department", { required: true })}
        readOnly
        style={{ display: "none" }}
      />

      <div className="w-full flex flex-col md:flex-row items-center gap-2">
        <div className="w-full md:w-[33.33%] flex items-start flex-col mt-3">
          <label className="text-[15px] text-[#666666]">
            Email <span className="text-red-700">*</span>
          </label>
          <input
            defaultValue={email}
            {...register("email", { required: true })}
            className="w-full border-[#A3A3A3] border-[1px] rounded-md py-[7px] px-3 outline-0"
            placeholder="Enter email"
            // readOnly
          />
        </div>
        <div className="w-full md:w-[33.33%] flex items-start flex-col mt-3">
          <label className="text-[15px] text-[#666666]">
            First name <span className="text-red-700">*</span>
          </label>
          <input
            // defaultValue="test"
            {...register("first_name", {
              required: true,
            })}
            className={
              errors.first_name
                ? "w-full border-[#ED0000] border-[1px] rounded-md py-[7px] px-3 outline-0"
                : "w-full border-[#A3A3A3] border-[1px] rounded-md py-[7px] px-3 outline-0"
            }
            placeholder="Enter first name"
          />
        </div>
        <div className="w-full md:w-[33.33%] flex items-start flex-col mt-3">
          <label className="text-[15px] text-[#666666]">
            Last name <span className="text-red-700">*</span>
          </label>
          <input
            {...register("last_name", { required: true })}
            className={
              errors.last_name
                ? "w-full border-[#ED0000] border-[1px] rounded-md py-[7px] px-3 outline-0"
                : "w-full border-[#A3A3A3] border-[1px] rounded-md py-[7px] px-3 outline-0"
            }
            placeholder="Enter lastname"
          />
          {/* {errors.lastname && <span>This field is required</span>} */}
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center gap-2 ">
        <div className="w-full md:w-[50%] flex items-start flex-col mt-3">
          <label className="text-[15px] text-[#666666]">
            Gender<span className="text-red-700">*</span>
          </label>
          <select
            {...register("gender")}
            className={
              errors.gender
                ? "w-full border-[#ED0000] border-[1px] rounded-md py-[7px] px-3 outline-0"
                : "w-full border-[#A3A3A3] border-[1px] rounded-md py-[7px] px-3 outline-0"
            }
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div className="w-full md:w-[50%] flex items-start flex-col mt-3">
          <label className="text-[15px] text-[#666666]">
            Profession <span className="text-red-700">*</span>
          </label>
          <select
            {...register("profession")}
            className="w-full border-[#A3A3A3] border-[1px] rounded-md py-[7px]  px-3 outline-0"
          >
            {professions?.map((profession) => (
              <option value={profession.name}>{profession.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row  items-center gap-2">
        <div className="w-full md:w-[50%] flex items-start flex-col mt-3">
          <label className="text-[15px] text-[#666666]">
            Medical Board NUmber(KMPD, NCK, COC, PPB){" "}
            <span className="text-red-700">*</span>
          </label>
          <input
            {...register("board_number", { required: true })}
            className={
              errors.board_number
                ? "w-full border-[#ED0000] border-[1px] rounded-md py-[7px] px-3 outline-0"
                : "w-full border-[#A3A3A3] border-[1px] rounded-md py-[7px] px-3 outline-0"
            }
            placeholder="Enter board number"
          />
          {/* {errors.lastname && <span>This field is required</span>} */}
        </div>
        <div className="w-full md:w-[50%] flex items-start flex-col mt-3">
          <label className="text-[15px] text-[#666666]">
            Name of the workplace <span className="text-red-700">*</span>
          </label>
          <input
            {...register("workplace", { required: true })}
            className={
              errors.workplace
                ? "w-full border-[#ED0000] border-[1px] rounded-md py-[7px] px-3 outline-0"
                : "w-full border-[#A3A3A3] border-[1px] rounded-md py-[7px] px-3 outline-0"
            }
            placeholder="Enter workplace name"
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center gap-2">
        <div className="w-full md:w-[50%]  flex items-start flex-col mt-4">
          <label className="text-[15px] text-[#666666]">
            Industry Job Title
            <span className="text-red-700">*</span>
          </label>
          <input
            {...register("title", { required: true })}
            className={
              errors.title
                ? "w-full border-[#ED0000] border-[1px] rounded-md py-[7px] px-3 outline-0"
                : "w-full border-[#A3A3A3] border-[1px] rounded-md py-[7px] px-3 outline-0"
            }
            placeholder="Enter workplace name"
          />
          {/* {errors.lastname && <span>This field is required</span>} */}
        </div>
      </div>
      <div className="w-full flex flex-col mt-3">
        <p className="text-[#666666] text-[15px] ">
          By submitting this information, one is allowing MLH to share this date
          with the activity for all instances provider
        </p>
        <div className="flex items-center mt-2">
          <input type="checkbox" {...register("skip")} />
          <p className="text-black ml-2 text-[15px]">
            What to skip re-entering registration info for this organizer's
            activities. Check this.
          </p>
        </div>
        <div className="flex items-center mt-3">
          <input
            type="checkbox"
            {...register("terms", { required: true })}
            checked
          />
          <p
            className={
              errors.terms
                ? "text-[#ED0000] ml-2 text-[15px]"
                : "text-black ml-2 text-[16px]"
            }
          >
            To continue, you must accept MLH terms and conditions stated{" "}
            <span className="underline cursor-pointer">here</span>
          </p>
        </div>
      </div>
      {errors.board_number ||
      errors.first_name ||
      errors.last_name ||
      errors.workplace ? (
        <p className="text-[#ED0000] mt-4">Please fill all the input fields</p>
      ) : (
        ""
      )}
      <button
        disabled={isSubmitting}
        type="submit"
        className="py-2 px-4 bg-[#2C2C74] w-[150px] flex self-end items-center justify-center text-white rounded-md mt-2 font-medium"
      >
        {isSubmitting ? "Submitting..." : "Register"}
      </button>
    </form>
  );
};

export default VisitorsForm;
