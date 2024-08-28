import React from "react";
import "../Home/HomePage.css"; // Ensure this CSS file includes the styles above
import "./TeamMembersSection.css";
import image from "../Images/image-0001.jpg";

const teamMembers = [
  {
    name: "Alice",
    designation: "Project Manager",
    role: "Leadership",
    expertise: "Management",
    technology: "Agile",
    experience: "5 years",
  },
  {
    name: "Bob",
    designation: "Software Developer",
    role: "Development",
    expertise: "Frontend",
    technology: "React",
    experience: "3 years",
  },
  {
    name: "Charlie",
    designation: "UI/UX Designer",
    role: "Design",
    expertise: "User Experience",
    technology: "Figma",
    experience: "4 years",
  },
  {
    name: "Diana",
    designation: "Quality Assurance",
    role: "Testing",
    expertise: "Automation",
    technology: "Selenium",
    experience: "2 years",
  },
  {
    name: "Evan",
    designation: "DevOps Engineer",
    role: "Operations",
    expertise: "CI/CD",
    technology: "Jenkins",
    experience: "3 years",
  },
  {
    name: "Fiona",
    designation: "Data Scientist",
    role: "Analysis",
    expertise: "Machine Learning",
    technology: "Python",
    experience: "4 years",
  },
];

const TeamMembersSection = () => {
  return (
    <div className="team-members-container">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member-box">
          <div className="team-member-heading">{member.name}</div>
          <img src={image} alt={member.name} className="team-member-image" />
          <ul className="team-member-details">
            <li className="team-member-detail">{member.designation}</li>
            <li className="team-member-detail">{member.role}</li>
            <li className="team-member-detail">{member.expertise}</li>
            <li className="team-member-detail">{member.technology}</li>
            <li className="team-member-detail">{member.experience}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TeamMembersSection;
