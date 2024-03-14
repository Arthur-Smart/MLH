"use client"

import React, { useEffect, useState } from 'react'
import styles from "./pastactivities.module.css"
import Activity from '../activity/Activity'
import axios from 'axios'
import { IActivity } from '@/interface/ActivityInterface'
import Tesac from '../tesac/Tesac'

const PastActivities = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  console.log("THIS ARE UPCOMING ACTIVITIES =>", activities)

  useEffect(() => {
    const getUpcomingActivities = async() => {
      const data = await axios.get(
        "https://api-mlh.vercel.app/api/v1/events/past_events"
      );
      setActivities(data.data.results)
    };
    getUpcomingActivities();
  }, []);

  return (
    <div className="w-full mt-9 flex flex-col items-center justify-center">
    <div className="w-full flex items-center justify-between">
      <p className="font-medium">PastActivities</p>
      <p className="font-medium">View all</p>
    </div>
    <div className="w-full h-[1px] bg-gray-200 my-2"></div>
    <div className="w-full flex items-center justify-end gap-4">
      <p className="cursor-pointer hover:text-[#3E2C78]">All</p>
      <p className="cursor-pointer hover:text-[#3E2C78]">Today</p>
      <p className="cursor-pointer hover:text-[#3E2C78]">Activity type</p>
      <p className="cursor-pointer hover:text-[#3E2C78]">Free</p>
      <p className="cursor-pointer hover:text-[#3E2C78]">Paid</p>
      <p className="cursor-pointer hover:text-[#3E2C78]">For you</p>
    </div>

    <div className={`${styles.past_activities_wrapper} w-full flex mt-5`}>
    {activities?.map((activity: IActivity) => (
            // <Activity key={activity.id}  {...activity} />
            <Tesac key={activity.id} activity={activity}/>
        ))}
    </div>
  </div>
  )
}

export default PastActivities