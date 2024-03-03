import React from "react";
import { useRouter } from 'next/navigation'
import { Inputs } from "@/interface/FormInterface";
import { useForm, SubmitHandler } from "react-hook-form";

const FulltimeForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    router.push("/success")
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col py-4"
    >
      <div className="w-full flex flex-col md:flex-row items-center gap-2">
        <div className="w-full md:w-[50%] flex flex-col">
          <label className="text-[15px] text-[#666666]">
            Email <span className="text-red-700">*</span>
          </label>
          <input
            defaultValue="johndoe@gmail.com"
            {...register("email", {required:true})} readOnly
            className={
              errors.email
                ? "w-full border-[#ED0000]] border-[1px] rounded-md py-2 px-3 outline-0"
                : "w-full border-[#A3A3A3] border-[1px] rounded-md py-2 px-3 outline-0"
            }
            placeholder="Enter email"
          />
        </div>
        <div className="w-full md:w-[50%]flex flex-col">
          <label className="text-[15px] text-[#666666]">
            First name <span className="text-red-700">*</span>
          </label>
          <input
            {...register("firstname", {
              required: true,
            })}
            className={
              errors.firstname
                ? "w-full border-[#ED0000] border-[1px] rounded-md py-2 px-3 outline-0"
                : "w-full border-[#A3A3A3] border-[1px] rounded-md py-2 px-3 outline-0"
            }
            placeholder="Enter first name"
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col">
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
         
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row  items-center gap-2 mt-3">
        <div className="w-full md:w-[50%]  flex flex-col">
          <label className="text-[15px] text-[#666666]">
            Gender<span className="text-red-700">*</span>
          </label>
          <select
            {...register("gender")}
            className="w-full border-[#A3A3A3] border-[1px] rounded-md py-2 px-3 outline-0"
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div className="w-full md:w-[50%]  flex flex-col">
          <label className="text-[15px] text-[#666666]">
            Profession <span className="text-red-700">*</span>
          </label>
          <select
            {...register("profession")}
            className="w-full border-[#A3A3A3] border-[1px] rounded-md py-2 px-3 outline-0"
          >
            <option value="medical">Medical Doctor</option>
            <option value="it">IT</option>
            <option value="human-resouce">Human Resource</option>
          </select>
        </div>
      </div>
      <div className="w-full  flex flex-col md:flex-row items-center gap-2 mt-3">
        <div className="w-full md:w-[50%] flex flex-col">
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
        <div className="w-full md:w-[50%]flex flex-col">
          <label className="text-[15px] text-[#666666]">
            Ward/Unit <span className="text-red-700">*</span>
          </label>
          <select
            {...register("unit")}
            className={
              errors.unit
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
      <div className="w-full flex flex-col md:flex-row  items-center gap-2 mt-3">
        <div className="w-full md:w-[50%] flex flex-col">
          <label className="text-[15px] text-[#666666]">
            Name of Avenue Hospital/Clinic/Office
            <span className="text-red-700">*</span>
          </label>
          <select
            {...register("name")}
            className="w-full border-[#A3A3A3] border-[1px] rounded-md py-2 px-3 outline-0"
          >
            <option value="kisumu">Kisumu</option>
            <option value="thika">Thika</option>
            <option value="parklands">ParkLands</option>
          </select>
          {/* {errors.lastname && <span>This field is required</span>} */}
        </div>
        <div className="w-full md:w-[50%] flex flex-col">
          <label className="text-[15px] text-[#666666]">
            Department <span className="text-red-700">*</span>
          </label>
          <select
            {...register("department")}
            className="w-full border-[#A3A3A3] border-[1px] rounded-md py-2 px-3 outline-0"
          >
            <option value="medical">Medical Doctor</option>
            <option value="it">IT</option>
            <option value="human-resouce">Human Resource</option>
          </select>
        </div>
      </div>
      {errors && (
        <p className="text-[#ED0000]">Please fill all the input fields</p>
      )}

      <input
        // disabled={!isDirty || !isValid}
        type="submit"
        className="py-3 px-4 bg-[#2C2C74] w-[100px] flex self-end items-center justify-center text-white rounded-md mt-2"
      />
    </form>
  );
};

export default FulltimeForm;
