import React, { useState } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [profiles, setProfiles] = useState([]);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.get(
        `https://proinfotech.ap-south-1.elasticbeanstalk.com/profile/name/${name}`
      );
      setProfiles(response.data);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="input-container">
        <label htmlFor="nameInput">Enter Your Name:</label>
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="profiles-container">
        {profiles.map((profile, index) => (
          <div key={index} className="profile-box">
            <div className="key-value">
              <span className="key">Name:</span>
              <span className="value">{profile.name}</span>
            </div>
            <div className="key-value">
              <span className="key">Email:</span>
              <span className="value">{profile.email}</span>
            </div>
            <div className="key-value">
              <span className="key">Designation:</span>
              <span className="value">{profile.designation}</span>
            </div>
            <div className="key-value">
              <span className="key">Age:</span>
              <span className="value">{profile.age}</span>
            </div>
            <div className="key-value">
              <span className="key">Expertise:</span>
              <span className="value">{profile.expertise}</span>
            </div>
            <div className="key-value">
              <span className="key">Field of Work:</span>
              <span className="value">{profile.fieldOfWork}</span>
            </div>
            <div className="key-value">
              <span className="key">Total Experience:</span>
              <span className="value">{profile.experience}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
