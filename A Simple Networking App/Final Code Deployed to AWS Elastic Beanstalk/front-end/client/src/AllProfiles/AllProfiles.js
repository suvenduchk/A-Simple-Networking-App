import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllProfiles.css";

const AllProfiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://proinfotech.ap-south-1.elasticbeanstalk.com/profiles",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProfiles(response.data.profiles);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, []);

  const handleConnect = async (profileId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "https://proinfotech.ap-south-1.elasticbeanstalk.com//connect",
        { profileId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Connected successfully!");
    } catch (error) {
      console.error("Error connecting:", error);
      alert("Failed to connect.");
    }
  };

  return (
    <div className="profiles-container">
      {profiles.map((profile) => (
        <div key={profile.userId} className="profile-box">
          <h3>{profile.name}</h3>
          <div className="key-value-container">
            <span className="key">Designation:</span>
            <span className="value">{profile.designation}</span>
          </div>
          <div className="key-value-container">
            <span className="key">Age:</span>
            <span className="value">{profile.age}</span>
          </div>
          <div className="key-value-container">
            <span className="key">Expertise:</span>
            <span className="value">{profile.expertise}</span>
          </div>
          <div className="key-value-container">
            <span className="key">Field of Work:</span>
            <span className="value">{profile.fieldOfWork}</span>
          </div>
          <div className="key-value-container">
            <span className="key">Experience:</span>
            <span className="value">{profile.experience}</span>
          </div>
          <div className="key-value-container">
            <span className="key">Email:</span>
            <span className="value">{profile.email}</span>
          </div>
          <button onClick={() => handleConnect(profile.userId)}>Connect</button>
        </div>
      ))}
    </div>
  );
};

export default AllProfiles;
