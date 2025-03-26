import React, { useState } from "react";
import "./../styles/PersonalizedLearning.css";

const PersonalizedLearning = () => {
  // State to store user input
  const [inputs, setInputs] = useState({
    classLevel: "",
    language: "",
    subject: "",
    topic: "",
  });

  const [videos, setVideos] = useState([]); // Store recommended videos

  // Handle input changes
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  // Function to get video recommendations
  const getRecommendations = () => {
    // 🎯 Replace these with a YouTube API or a predefined list of video recommendations
    const videoRecommendations = {
      Math: {
        "Algebra": ["nKpCqie6v-s", "1OjEOZeJTCo"],
        "Geometry": ["MT5zWTvKhxM", "f2yWvUfWdp4"],
      },
      Science: {
        "Physics": ["O5nskjZ_GoI", "2UHS883_P60"],
        "Biology": ["wKpO5gGpT1o", "w3bHZs_uFro"],
      },
      English: {
        "Grammar": ["ZtNI-1Vx2hk", "DUP3R0mzcJo"],
        "Literature": ["Uj-o2vskZBA", "Ow0MOg0QX9g"],
      },
    };

    // Extract user-selected subject and topic
    const subject = inputs.subject;
    const topic = inputs.topic;

    // Find matching videos
    if (videoRecommendations[subject] && videoRecommendations[subject][topic]) {
      setVideos(videoRecommendations[subject][topic]);
    } else {
      setVideos([]);
    }
  };

  return (
    <div className="learning-container">
      <h2>🎓 Personalized Learning</h2>
      
      {/* Form Section */}
      <div className="form-group">
        <label>Class:</label>
        <input type="text" name="classLevel" value={inputs.classLevel} onChange={handleChange} placeholder="Enter class (e.g., 10th)" />
      </div>

      <div className="form-group">
        <label>Language:</label>
        <input type="text" name="language" value={inputs.language} onChange={handleChange} placeholder="Enter language (e.g., English)" />
      </div>

      <div className="form-group">
        <label>Subject:</label>
        <select name="subject" value={inputs.subject} onChange={handleChange}>
          <option value="">Select Subject</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
        </select>
      </div>

      <div className="form-group">
        <label>Topic:</label>
        <input type="text" name="topic" value={inputs.topic} onChange={handleChange} placeholder="Enter topic (e.g., Algebra)" />
      </div>

      <button className="recommend-button" onClick={getRecommendations}>Get Recommendations</button>

      {/* Video Recommendations */}
      <div className="video-section">
        <h3>📺 Recommended Videos</h3>
        {videos.length > 0 ? (
          videos.map((videoId, index) => (
            <iframe
              key={index}
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`Recommended Video ${index + 1}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ))
        ) : (
          <p>No videos found. Try a different topic.</p>
        )}
      </div>
    </div>
  );
};

export default PersonalizedLearning;
