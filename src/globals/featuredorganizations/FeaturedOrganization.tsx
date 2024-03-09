import React from "react";
import styles from "./featuredorgs.module.css";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const FeaturedOrganization = () => {
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
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="h-20">
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                  <p className="text-black-500">Feature Organization logo goes here</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  );
};

export default FeaturedOrganization;
