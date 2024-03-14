import React, { useEffect } from "react";
import styles from "./ongoingevents.module.css";
import axios from "axios";

const OngoingEvents = () => {
  useEffect(() => {
    const getOngoingEvents = () => {
      const data = axios.get(
        "https://api-mlh.vercel.app/api/v1/events/on_going_events"
      );
      console.log("THIS IS THE ONGOING ACTIVITY =>",data);
    };
    getOngoingEvents();
  }, []);
  return <main className="w-full flex flex-col">
<p>Are the ongoing activity page</p>
  </main>;
};

export default OngoingEvents;
