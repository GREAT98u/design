import React from "react";
import "./../styles/Dashboard.css";
import ProfileCard from "./ProfileCard";
import StudentProgress from "./StudentProgress";
import AITutorChat from "./AITutorChat";
import VideoRecommendation from "./VideoRecommendation";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="left-section">
        <ProfileCard />
        <StudentProgress />
        <AITutorChat />
      </div>
      <div className="right-section">
        <VideoRecommendation />
      </div>
    </div>
  );
};

export default Dashboard;
