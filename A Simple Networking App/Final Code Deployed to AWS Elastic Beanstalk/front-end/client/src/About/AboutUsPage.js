import React from "react";
import "./AboutUsPage.css";
import TeamMembersSection from "../TeamMembers/TeamMembersSection.js";
// import Footer1 from "../Footer-1/Footer-1.js";

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p>Learn more about our team and mission.</p>
      </div>
      <div className="about-us-content">
        <p>
          We are a dedicated team committed to providing the best services to
          our clients. Our mission is to deliver high-quality solutions that
          meet the needs of our diverse customer base.
        </p>
        <TeamMembersSection />
      </div>
      {/* <Footer1 /> */}
    </div>
  );
};

export default AboutUsPage;
