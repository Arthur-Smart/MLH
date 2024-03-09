"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import BANNER from "../../../public/banner.jpg";
import Featured from "@/globals/featured/Featured";

const Home = () => {
  const [selected, setSelected] = useState(1);

  type ActivitiesType = {
    id: number;
    title: string;
  };

  const ActivitiesBtns: ActivitiesType[] = [
    {
      id: 1,
      title: "Featured",
    },
    {
      id: 2,
      title: "Highlights",
    },
    {
      id: 3,
      title: "Upcoming",
    },
  ];

  return (
    <main className="w-screen flex flex-col items-center justify-center py-5">
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
        <Featured/>
      </section>
    </main>
  );
};

export default Home;
