"use client";

import React, { useEffect, useState } from "react";
import styles from "./institution.module.css";
import Image from "next/image";
import SEARCH_ICON from "../../../../../public/search.svg";
import ORG_BANNER from "../../../../../public/org-banner.jpg";
import LearningActivities from "@/globals/learningactivities/LearningActivities";
import Highlights from "@/globals/highlights/Hightlights";
import { useParams } from "next/navigation";
import { getOrganization } from "@/endpoints/endpoints";
import { IOrganization } from "@/interface/ActivityInterface";

const page = () => {
  const [selected, setSelected] = useState(1);
  const [organization, setOrganization] = useState<IOrganization>();

  const { slug } = useParams();

  console.log(slug);

  type ButtonType = {
    id: number;
    title: string;
  };

  const buttons: ButtonType[] = [
    {
      id: 1,
      title: "Highlights",
    },
    {
      id: 2,
      title: "Learning Activties",
    },
  ];

  //GET ORGANIZATION
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      if (slug) {
        try {
          const data: any = await getOrganization("");
          setOrganization(data);
          console.log("DATA DATA DATA =>", data);
        } catch (error) {
          console.error("Error fetching organization:", error);
        }
      }
    };

    fetchData();
  }, [slug]);

  //GET ORGANIZATION ACTIVITIES

  return (
    <main className="w-full flex flex-col items-center justify-center py-3">
      <section className="container rounded h-[350px] flex items-center justify-center">
        <Image
          src="http://d855-197-178-168-180.ngrok-free.app/media/MLH_institute_sample.jpg"
          alt="Avenue Banner"
          width={2000}
          height={700}
          className={styles.organization_banner}
        />
      </section>
      <section className="container mt-3">
        <h2 className="text-lg font-medium">About</h2>
        <p className="text-[#33333] text-[15px]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Contrary to
          popular belief, Lorem Ipsum is not simply random text. It has roots in
          a piece of classical Latin literature from 45 BC, making it over 2000
          years old.
        </p>
      </section>

      {/*Highlights Activities Section*/}
      <section className="container mt-3 rounded border-[1px] border-gray-200 p-2">
        <div
          className={`${styles.institution_filter} p-[3px] rounded-full w-[60%] bg-gray-200 flex items-center justify-between`}
        >
          <div className="flex items-center gap-3 w-[80%]">
            <div>
              <select className="text-gray-500 text-[15px] bg-transparent outline-0">
                <option>Select Location</option>
              </select>
            </div>
            <div className="h-9 w-[1px] bg-gray-400"></div>
            <div>
              <select className="text-gray-500 text-[15px] bg-transparent outline-0">
                <option>Select Department</option>
              </select>
            </div>
            <div className="h-9 w-[1px] bg-gray-400"></div>
            <div>
              <input
                type="string"
                placeholder="Activity name"
                className="text-gray-500 text-[15px] bg-transparent outline-0 placeholder:text-gray-500 placeholder:text-[15px]"
              />
            </div>
          </div>

          <div className="bg-[#AAA2C4] h-11 w-11 rounded-full flex items-center justify-center">
            <Image
              src={SEARCH_ICON}
              alt=""
              width={20}
              height={20}
              className={`cursor-pointer ${styles.search__icon}`}
            />
          </div>
        </div>

        {/*Filter Activity*/}
        <div className="flex items-center gap-3 mt-5">
          {buttons.map((button) => (
            <button
              onClick={() => setSelected(button.id)}
              className={
                selected == button.id
                  ? "py-2 px-3 bg-[#3E2C78] rounded-full text-[15px] text-white"
                  : "py-2 px-4 rounded-full border-[1px] border-gray-200 text-[15px]"
              }
              key={button.id}
            >
              {button.title}
            </button>
          ))}
        </div>

        {/* Highlight & Learning Section */}
        <div className="w-full mt-5">
          {/* <Highlights/> */}
          {selected == 1 ? <Highlights /> : <LearningActivities />}
        </div>
      </section>
    </main>
  );
};

export default page;
