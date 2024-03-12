"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import BANNER from "../../../public/banner.jpg";
import Featured from "@/globals/featured/Featured";
import Ongoing from "@/globals/ongoing/Ongoing";
import Upcoming from "@/globals/upcoming/Upcoming";
import FeaturedOrganization from "@/globals/featuredorganizations/FeaturedOrganization";
import PastActivities from "@/globals/pastactivities/PastActivities";
import apiService from "@/libs/utils";
import { IActivity } from "@/interface/ActivityInterface";

const Home = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  console.log("THIS ARE THE ACTVS=>", activities);

  

  //GET ALL THE ACTIVITIES
  useEffect(() => {
    getActivities();
  },[]);


  const getActivities =  useCallback(async () => {
    try {
      const acts: any =  await apiService.get("api/v1/events/");
      setActivities(acts.results);
    } catch (error) {
      console.log(error);
    }
  },[]);


  const featuredActivities:IActivity[] = activities.filter((activity) => activity.is_featured);

  // console.log("THIS ARE THE FEATURED ACTIVITIES =>", featuredActivities)

  return (
    <main className="w-full main flex flex-col items-center justify-center py-5 px-3">
      <section className="container px-0 rounded h-[450px] overflow-hidden bg-gray-600 my-3 flex flex-col items-center justify-center">
        <Image
          src={BANNER}
          alt="Medical Learning Hub"
          width={1700}
          height={750}
          className="banner_image"
        />
      </section>

      {/* Activities Section */}
      <section className="container flex flex-col items-center justify-center mt-3">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <p>Browse by country</p>
            <select className="ml-2 border-gray-200 border-[1px] outline-0 bg-transparent p-[4px] rounded">
              <option>All</option>
              <option>Kenya</option>
              <option>Uganda</option>
              <option>Ghana</option>
            </select>
          </div>
          <div className="flex items-center">
            <p>Filtler by activity language</p>
            <select className="ml-2 border-gray-200 border-[1px] outline-0 bg-transparent p-[4px] rounded">
              <option>English</option>
              <option>French</option>
            </select>
          </div>
        </div>

        {/* Feature Activities */}
        <Featured featured={featuredActivities} />
        <div className="w-full mt-9 rounded h-[450px] overflow-hidden">
          <Image
            src={BANNER}
            alt="mlh-banner"
            width={1000}
            height={600}
            className="inline_banner "
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <Ongoing />
          <Upcoming />
          <FeaturedOrganization />
          <PastActivities />
        </div>
      </section>
    </main>
  );
};

export default Home;
