import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    age: "",
    email: "",
    designation: "",
    expertise: "",
    fieldOfWork: "",
    experience: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Ensure token is retrieved from localStorage
    if (!token) {
      alert("No token found. Please login again.");
      navigate("/login");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        navigate("/page-0001");
      }
    } catch (error) {
      console.error("Error submitting profile:", error);
      if (error.response && error.response.status === 403) {
        alert("Forbidden: You are not authorized to perform this action.");
      } else {
        alert("An error occurred while submitting the profile.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="designation"
        value={formData.designation}
        onChange={handleChange}
        placeholder="Designation"
        required
      />
      <input
        type="text"
        name="expertise"
        value={formData.expertise}
        onChange={handleChange}
        placeholder="Expertise"
        required
      />
      <input
        type="text"
        name="fieldOfWork"
        value={formData.fieldOfWork}
        onChange={handleChange}
        placeholder="Field of Work"
        required
      />
      <input
        type="number"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
        placeholder="Experience"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserProfile;
