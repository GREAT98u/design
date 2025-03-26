import React from "react";
import "./../styles/StudentProgress.css";

const StudentProgress = () => {
  return (
    <div className="progress-container">
      <h3>Your Progress</h3>
      <progress value="60" max="100"></progress>
    </div>
  );
};

export default StudentProgress;
