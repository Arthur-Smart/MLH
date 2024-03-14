import React, { useEffect, useState } from 'react'
import styles from './learningactivities.module.css'
import LearningActivity from '../learningactivity/LearningActivity'
import { IActivity } from '@/interface/ActivityInterface';
import axios from 'axios';

const LearningActivities = ({id}:any) => {
    // console.log("THIS IS THE ID =>", id)
    const [activities, setActivities] = useState<IActivity[]>([]);
    const orgActivities = activities.filter(activity => activity.organization_id == id);
  

  // GET FEATURES ACTIVITIES
  useEffect(() => {
    const featuredActivities = async () => {
      const data = await axios.get(
        `${process.env.NEXT_PUBLIC_API_HOST}api/v1/events/`
      );
      setActivities(data.data.results);
    };
    featuredActivities();
  }, []);

  return (
    <main className="w-full flex flex-col justify-center">
        <div className="flex items-center gap-3">
            <div className="flex items-center">
                <input type="checkbox"/>
                <p className="text-[15px] ml-2">Upcoming Activities</p>
            </div>
            <div className="flex items-center">
                <input type="checkbox"/>
                <p className="text-[15px] ml-2">Past Activities</p>
            </div>
        </div>
        <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3">
            {orgActivities.map((orgActivity) => (
                <LearningActivity orgActivity = {orgActivity}/>
            ))}
        </div>
        <button className="mt-4 bg-[#3E2C78] hover:bg-[#3E2C78]/90 rounded-full text-white py-2 px-4 text-[15px] w-[fit-content] self-center">Load more</button>
    </main>
  )
}

export default LearningActivities