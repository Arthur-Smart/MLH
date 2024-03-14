"use client";

import React, { useEffect, useState } from "react";
import styles from "./featuredorgs.module.css";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import { IOrganization } from "@/interface/ActivityInterface";
import Image from "next/image";

const FeaturedOrganization = () => {
  const [organizations, setOrganizations] = useState<IOrganization[]>([]);

  // GET FEATURES ACTIVITIES
  useEffect(() => {
    const featuredEvents = async () => {
      const data = await axios.get(
        "https://api-mlh.vercel.app/api/v1/organization/"
      );
      setOrganizations(data.data.results);
    };
    featuredEvents();
  }, []);

  const featuredOrgs = organizations.filter((org) => org.featured == true);
  console.log("HI THIS IS A FEATURED ORGANIZATION =>", featuredOrgs);

  return (
    <div className="w-full my-9 flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-between">
        <p className="font-medium">Featured organizations</p>
      </div>
      <div className="w-full h-[1px] bg-gray-200 my-2"></div>
      <div className="w-full flex items-center justify-end gap-4">
        <p className="cursor-pointer hover:text-[#3E2C78]">For you</p>
      </div>

      <Carousel className="w-[85%] md:w-[90%] h-22 mt-2">
        <CarouselContent className="-ml-1 flex justify-center">
          {Array.from({ length: featuredOrgs.length }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                {featuredOrgs.map((org) => (
                  <Card className="h-25">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                      <Image
                        src={org.logo}
                        alt={org.name}
                        width={55}
                        height={55}
                      />
                      <p className="text-black-500 text-[14px]">{org.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {featuredOrgs.length > 1 && (
          <>
            {" "}
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default FeaturedOrganization;
