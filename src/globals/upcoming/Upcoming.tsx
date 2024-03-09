import React from 'react'
import Activity from '../activity/Activity'
import styles from "./upcoming.module.css"

const Upcoming = () => {
  return (
    <div className="w-full mt-9 flex flex-col items-center justify-center">
    <div className="w-full flex items-center justify-between">
      <p className="font-medium">Upcoming</p>
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

    <div className={`${styles.upcoming_activities_wrapper} w-full flex mt-5`}>
      <Activity/>
      <Activity/>
      <Activity/>
      <Activity/>
      <Activity/>
      <Activity/>
    </div>
  </div>
  )
}

export default Upcoming