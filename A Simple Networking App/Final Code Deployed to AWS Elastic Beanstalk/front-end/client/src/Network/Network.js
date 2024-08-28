import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Network.css";

const Network = () => {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://proinfotech.ap-south-1.elasticbeanstalk.com//network",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setConnections(response.data.connections);
      } catch (error) {
        console.error("Error fetching connections:", error);
      }
    };

    fetchConnections();
  }, []);

  return (
    <div className="network-container">
      {connections.map((connection) => (
        <div key={connection.userId} className="connection-box">
          <h3>{connection.name}</h3>
          <div className="key-value-container">
            <span className="key">Designation:</span>
            <span className="value">{connection.designation}</span>
          </div>
          <div className="key-value-container">
            <span className="key">Age:</span>
            <span className="value">{connection.age}</span>
          </div>
          <div className="key-value-container">
            <span className="key">Expertise:</span>
            <span className="value">{connection.expertise}</span>
          </div>
          <div className="key-value-container">
            <span className="key">Field of Work:</span>
            <span className="value">{connection.fieldOfWork}</span>
          </div>
          <div className="key-value-container">
            <span className="key">Experience:</span>
            <span className="value">{connection.experience}</span>
          </div>
          <div className="key-value-container">
            <span className="key">Email:</span>
            <span className="value">{connection.email}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Network;
