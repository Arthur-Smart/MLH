import React from "react";
import styles from "./learningactivity.module.css";

const LearningActivity = () => {
  return (
    <div
      className={`${styles.activity_container} border-[1px] border-gray-200 rounded`}
    >
      <div className="p-2">
        <h2 className="text-base font-medium">Title goes here</h2>
        <p className="text-[15px] text-[#333333]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots. Contrary to popular belief, Lorem Ipsum is not simply
          random text. It has roots.
        </p>
      </div>
    </div>
  );
};

export default LearningActivity;
