"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import BANNER from "../../../public/banner.jpg";

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
    <main className="w-screen flex flex-col items-center justify-center">
      <section className="container px-0 rounded h-[450px] overflow-hidden bg-gray-600 my-3 flex flex-col items-center justify-center">
        {/* <p className="text-3xl text-gray-200 font-semibold">
          MLH BANNER GOES HERE
        </p>
        <p className="text-gray-200">
          The responsiveness of this page is not fixed if you are seeing this
          text
        </p> */}
        <Image
          src={BANNER}
          alt="Medical Learning Hub"
          width={1700}
          height={750}
          className="banner_image"
        />
      </section>
      {/* <section className="container flex items-start items-center mt-5">
        <h2 className="font-semibold text-lg">Browse activities</h2>
        <select className="ml-2 text-base bg-transparent outline-0 text-[#3E2C78] font-medium">
          <option value="all">All</option>
          <option value="kenya">Kenya</option>
          <option value="uganda">Uganda</option>
        </select>
      </section>
      <section className="container flex items-center gap-4 mt-5">
        {ActivitiesBtns.map((btn) => (
          <button
          onClick={() => setSelected(btn.id)}
            className={
              selected == btn.id
                ? "bg-[#D9D9D9] py-2 px-6 text-[#2C2C74] font-medium rounded"
                : "border-[#D9D9D9] border-[1px] rounded py-2 px-6"
            }
            key={btn.id}
          >
            {btn.title}
          </button>
        ))}
      </section> */}
      <section className=""></section>
      <div className="w-screen h-screen flex items-center justify-center flex flex-col px-4">
        <p className="text-2xl text-center">
          Our Landing page is being developed 😊?
        </p>
        <p className="text-center">
          Check the Activity page using the button below
        </p>
        <Link
          href="/registration/avenue"
          className="py-2 px-3 rounded bg-[#AAA2C4] text-[#2C2C74]"
        >
          Activity Page
        </Link>
      </div>
    </main>
  );
};

export default Home;
