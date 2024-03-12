import React, { useState } from "react";
import styles from "./featured.module.css";
import Activity from "../activity/Activity";
import { IActivity } from "@/interface/ActivityInterface";

interface FeaturedProps {
  featured: IActivity[];
}

const Featured: React.FC<FeaturedProps> = ({ featured }) => {
  const [visibleActivities, setVisibleActivities] = useState(6);
  const [loader, setLoader] = useState<Boolean>(false)

  console.log("FEATURED ACTIVITIES COUNT =>", featured.length);

  const loadMoreActivities = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false)
      setVisibleActivities(prevVisibleActivities => prevVisibleActivities + 5)
    }, 1500)
   
  }

  return (
    <div className="w-full mt-4 flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-between">
        <p className="font-medium">Featured</p>
        <p className="font-medium">View all</p>
      </div>
      <div className="w-full h-[1px] bg-gray-200 my-2"></div>
      <div className="w-full flex items-center justify-end gap-4">
        <p className="cursor-pointer hover:text-[#3E2C78]">All</p>
        <p className="cursor-pointer hover:text-[#3E2C78]">Today</p>
        <p className="cursor-pointer hover:text-[#3E2C78]">Activity type</p>
        <p className="cursor-pointer hover:text-[#3E2C78]">Free</p>
        <p className="cursor-pointer hover:text-[#3E2C78]">Paid</p>
      </div>

      {/* {visibleEvents < events.length && (
        <button onClick={loadMore}>Load More</button>
      )} */}

      <div className={`${styles.featured_activitie_wrapper} w-full flex mt-5`}>
        {featured.slice(0, visibleActivities).map((activity) => (
          <Activity key={activity.id} {...activity} />
        ))}
      </div>
      {visibleActivities < featured.length && (
        <button onClick={loadMoreActivities} className="mt-3 py-2 px-3 bg-[#3E2C78] rounded-full text-white hover:bg-[#3E2C78]/90">
          Load more
        </button>
      )}
    </div>
  );
};

export default Featured;
