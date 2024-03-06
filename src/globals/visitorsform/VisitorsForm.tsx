import React from "react";
import { useRouter } from 'next/navigation'
import styles from "./visitorsform.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "@/interface/FormInterface";

const VisitorsForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await  new Promise((resolve) => setTimeout(resolve, 2500));

    console.log(data)
    router.push("/success")};
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col "
    >
      <div className="w-full flex flex-col md:flex-row items-center gap-2">
        <div className="w-full md:w-[33.33%] flex items-start flex-col mt-3">
          <label className="text-[15px] text-[#666666]">
            Email <span className="text-red-700">*</span>
          </label>
          <input
            defaultValue="johndoe@gmail.com"
            {...register("email" , {required:true})}
            className="w-full border-[#A3A3A3] border-[1px] rounded-md py-2 px-3 outline-0"
            placeholder="Enter email"
            readOnly
          />
        </div>
        <div className="w-full md:w-[33.33%] flex items-start flex-col mt-3">
          <label className="text-[15px] text-[#666666]">
            First name <span className="text-red-700">*</span>
          </label>
          <input
            // defaultValue="test"
            {...register("firstname", {
              required: true              
            })}
            className={
              errors.firstname
                ? "w-full border-[#ED0000] border-[1px] rounded-md py-2 px-3 outline-0"
                : "w-full border-[#A3A3A3] border-[1px] rounded-md py-2 px-3 outline-0"
            }
            placeholder="Enter first name"
          />
        </div>
        <div className="w-full md:w-[33.33%] flex items-start flex-col mt-3">
          <label className="text-[15px] text-[#666666]">
            Last name <span className="text-red-700">*</span>
          </label>
          <input
            {...register("lastname", { required: true })}
            className={
              errors.lastname
                ? "w-full border-[#ED0000] border-[1px] rounded-md py-2 px-3 outline-0"
                : "w-full border-[#A3A3A3] border-[1px] rounded-md py-2 px-3 outline-0"
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
                ? "w-full border-[#ED0000] border-[1px] rounded-md py-2 px-3 outline-0"
                : "w-full border-[#A3A3A3] border-[1px] rounded-md py-2 px-3 outline-0"
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
            className={
              errors.profession
                ? "w-full border-[#ED0000] border-[1px] rounded-md py-2 px-3 outline-0"
                : "w-full border-[#A3A3A3] border-[1px] rounded-md py-2 px-3 outline-0"
            }
          >
            <option value="medical">Medical Doctor</option>
            <option value="it">IT</option>
            <option value="human-resouce">Human Resource</option>
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
            {...register("boardNumber", { required: true })}
            className={
              errors.boardNumber
                ? "w-full border-[#ED0000] border-[1px] rounded-md py-2 px-3 outline-0"
                : "w-full border-[#A3A3A3] border-[1px] rounded-md py-2 px-3 outline-0"
            }
            placeholder="Enter board number"
          />
          {/* {errors.lastname && <span>This field is required</span>} */}
        </div>
        <div className="w-full md:w-[50%] flex items-start flex-col mt-3">
          <label className="text-[15px] text-[#666666]">
            Name of the workplace <span className="text-red-700">*</span>
          </label>
          <select
            {...register("unit")}
            className="w-full border-[#A3A3A3] border-[1px] rounded-md py-2 px-3 outline-0"
          >
            <option value="medical">Medical Doctor</option>
            <option value="it">IT</option>
            <option value="human-resouce">Human Resource</option>
          </select>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center gap-2">
        <div className="w-full md:w-[50%]  flex items-start flex-col mt-4">
          <label className="text-[15px] text-[#666666]">
            Name of Avenue Hospital/Clinic/Office
            <span className="text-red-700">*</span>
          </label>
          <input
            {...register("name", { required: true })}
            className={
              errors.name
                ? "w-full border-[#ED0000] border-[1px] rounded-md py-2 px-3 outline-0"
                : "w-full border-[#A3A3A3] border-[1px] rounded-md py-2 px-3 outline-0"
            }
            placeholder="Enter board number"
          />
          {/* {errors.lastname && <span>This field is required</span>} */}
        </div>
      </div>
      <div className="w-full flex flex-col mt-3">
        <p className="text-[#666666] text-base ">By submitting this information, one is allowing MLH to share this date with the activity for all instances provider</p>
        <div className="flex items-center mt-2">
        <input type="checkbox" {...register("skip")}/>
        <p className="text-black ml-2 text-[16px]">What to skip re-entering registration info for this organizer's activities. Check this.</p>
        </div>   
        <div className="flex items-center mt-3">
        <input type="checkbox" {...register("terms", {required:true})}/>
        <p className={errors.terms ? "text-[#ED0000] ml-2 text-[16px]" : "text-black ml-2 text-[16px]"}>To continue, you must accept MLH terms and conditions stated <span className="underline cursor-pointer">here</span></p>
        </div>  
      </div>
      {errors.boardNumber || errors.firstname || errors.lastname ||errors.name ? (
        <p className="text-[#ED0000] mt-4">Please fill all the input fields</p>
      ) : ("")}
       <button
        disabled={isSubmitting}
        type="submit"
        className="py-3 px-4 bg-[#2C2C74] w-[150px] flex self-end items-center justify-center text-white rounded-md mt-2 font-medium"
      >
        {isSubmitting ? "Submitting..." : "Register"}
        </button>
    </form>
  );
};

export default VisitorsForm;
