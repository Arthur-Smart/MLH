import React from "react";
import styles from "./learningactivity.module.css";
import { IActivity } from "@/interface/ActivityInterface";

const LearningActivity = ({ orgActivity }: any) => {
  return (
    <div
      className={`${styles.activity_container} border-[1px] border-gray-200 rounded`}
    >
      <div className="p-2">
        <h2 className="text-base font-medium">{orgActivity.title}</h2>
        {orgActivity.description.length > 174 ? (
          <p className="text-[15px] text-[#333333]">
            {orgActivity.description.slice(0, 174)}...
          </p>
        ) : (
          <p className="text-[15px] text-[#333333]">
            {orgActivity.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default LearningActivity;
